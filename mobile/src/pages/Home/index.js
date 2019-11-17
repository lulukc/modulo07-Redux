import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Container,
  ProductsList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  BuyButton,
  BuyButtonText,
} from './styles';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  hendelAddtoCart = product => {
    const { dispatch } = this.props;
    dispatch({
      type: 'Add_to_cart',
      product,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductsList
          data={products}
          keyExatractor={product => product.id}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle> {item.title} </ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <BuyButton onPress={() => this.hendelAddtoCart(products)}>
                <BuyButtonText>Adicionar ao carrinho</BuyButtonText>
              </BuyButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}
export default connect()(Home);
