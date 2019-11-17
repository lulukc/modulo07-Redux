import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191919;
  align-items: center;
`;

export const ProductsList = styled.FlatList``;

export const Product = styled.View`
  background: #fff;
  margin: 20px;
  border-radius: 5px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;
export const ProductTitle = styled.Text`
  color: #666;
  font-size: 16px;
  align-items: center;
  margin: 10px;
`;

export const ProductPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
export const BuyButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
`;
export const BuyButtonText = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;
