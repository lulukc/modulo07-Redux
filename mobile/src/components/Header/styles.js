import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-content: center;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  color: #fff;
  background: #ff0000;
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
