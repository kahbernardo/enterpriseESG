import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 8px;
  flex-direction: column;
  margin-bottom: 35px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Content = styled.Text`
  font-size: 14px;
  margin-bottom: 12px;
  margin-left: 15%;
  text-align: justify;
`;

export const ImagesContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 12px;
`;

export const Image = styled.Image`
  width: 48%;
  height: 100px;
  border-radius: 8px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color: #dcdcdc;
  padding-top: 8px;
`;

export const FooterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const FooterIcon = styled.Text`
  margin-right: 4px;
  font-size: 16px;
  color: #888;
`;

export const FooterText = styled.Text`
  font-size: 14px;
  color: #888;
  margin-left: 8px;
`;

export const Logo = styled.View`
    width: 15%;
`;

