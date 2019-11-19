import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { formatPrice } from '../../util/format';

import { Container } from './styles';

function Cart() {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.amount * product.price),
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.amount * product.price;
  }, 0),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
