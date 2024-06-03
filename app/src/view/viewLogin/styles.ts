import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView<ITheme>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => themes[p.themeSelected].colors.v1};
`;

export const Contents = styled.View`
  display: flex;
  margin: 0 4%;
`;


export const Header = styled.View`
  display: flex;
  justify-content: flex-start;
  margin: 0 15px;
  margin-top: 30px;
  margin-bottom: 15px;
`;


export const FormBase = styled.View`
  display: flex;
  margin: 0 4%;
  background-color: #baeaff;
  border-radius: 8px;
  border-color: #a4e1ff;
  border-width: 1px;
`;

export const Form = styled.View`
  display: flex;
  margin: 15px;  
`;

export const Logo = styled.View`
  display: flex;
  margin-top: 15px;  
  margin-bottom: 15px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const LogoText = styled.View`
  display: flex;
  margin-bottom: 20px;
  margin-top: 15px;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const FooterBase = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 45px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const TitleFooter = styled.Text`
  display: flex;
  font-family: 'Itim_400Regular';
  font-size: 16px;
  color: #717070;
`;

export const TitleFooterSpan = styled.Text`
  display: flex;
  font-size: 16px;
  color: ${themes.default.colors.v10};
  margin: 0 5px;
  font-family: 'Itim_400Regular';
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  align-items: center;
  margin-bottom: 10px;
`;

export const Button = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 5px 0;
`;


export const Title = styled.Text`
  display: flex;
  font-family: 'Itim_400Regular';
  font-size: 24px;
  color: #717070;
  text-align: left;
`;

export const Text = styled.Text`
  display: flex;
  font-family: 'Itim_400Regular';
  font-size: 15px;
  letter-spacing: 0.5;
  text-align: justify;
  color: #939393;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 0;
`;