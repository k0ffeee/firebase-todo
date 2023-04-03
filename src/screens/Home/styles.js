import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #D3D3D3;
`;

export const ButtonContainer = styled.View`
  margin: 10px 0;
  height: 100px;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  background-color: #D3D3D3;
  padding: 10px 0;
  border-radius: 10px;
`;

export const ButtonTitle = styled.Text`
  color: #FFF;
  font-size: 16px;
  text-align: center;
`;