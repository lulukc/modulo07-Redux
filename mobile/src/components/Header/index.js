import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { Container, Logo, Cart, ItemCount } from './styles';

import logo from '../../assets/logo.png';

export default function Header({ navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo source={logo} />
      </TouchableOpacity>
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>3</ItemCount>
      </Cart>
    </Container>
  );
}
