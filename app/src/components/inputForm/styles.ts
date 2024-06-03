import { ITheme } from "@domain/interfaces/ITheme";

import { EInputPosition, EInputSize } from "@domain/enum/EInput";
import themes from "@themes/themes";
import styled, { css } from "styled-components/native";

export const Container = styled.View<ITheme>`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.View<ITheme>`
  display: flex;
  flex-direction: column;    


`;

interface IBase {
  showIcons?: boolean;
}

export const Base = styled.View<IBase>`
  display: flex;  
  flex-direction: column;  
`;

export const Icon = styled.View`
  display: flex;
  width: 40px;
  justify-content: center;
  align-items: center;
`;

interface IInput extends ITheme {
  showIcons?: boolean;
  size?: EInputSize;
  position: EInputPosition;
}

const inputShowIconsCSS = css`
  margin-left: 8px;
`;

const inputPositionLeftCSS = css``;

const inputPositionCenterCSS = css`
  align-items: center;
  text-align: center;
`;

const inputPositionRightCSS = css``;

export const Input = styled.TextInput.attrs<IInput>(props => ({
  placeholderTextColor: '#93C7E0' // substitua pelo código da cor desejada
}))<IInput>`
  display: flex;
  border-width: 1px;
  border-color: #93C7E0;
  border-radius: 6px;
  background-color: #fff;
  font-size: ${(p) => (p.size === EInputSize.regular ? "13px" : "20px")};
  padding: 11px 10px;
  color: ${(p) => themes[p.themeSelected].inputForm.color};
  font-weight: 400;
  ${(p) => p.showIcons === true && inputShowIconsCSS};
  ${(p) =>
    p.position === EInputPosition.left
      ? inputPositionLeftCSS
      : p.position === EInputPosition.center
      ? inputPositionCenterCSS
      : p.position === EInputPosition.right
      ? inputPositionRightCSS
      : inputPositionLeftCSS};
`;

export const ErrorText = styled.Text`
  display: flex;
  text-align: right;
  color: #b15151;
  font-size: 15px;
  letter-spacing: 1px;
  margin-right: 4px;
  height: 11px;
`;

export const LabelBase = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.Text`
  display: flex;
  color: #6E6E6E;
  font-size: 16px;
  letter-spacing: 1px;
`;

export const InputBase = styled.Text`
  display: flex;
`;
