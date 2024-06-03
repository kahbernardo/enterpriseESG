import { ITheme } from "@domain/interfaces/ITheme";

import { EInputPosition, EInputSize } from "@domain/enum/EInput";
import themes from "@themes/themes";
import styled, { css } from "styled-components/native";

export const Container = styled.View<ITheme>`
  display: flex;
  flex-direction: column;
  padding-top: 0;
  margin-bottom: 8px;
  width:${(p) => p.size ? `${p.size}%` : '100%' };
`;

export const Content = styled.View<ITheme>`
  display: flex;
  flex-direction: column;
  border-bottom-width: 1px;
  border-bottom-color: ${(p) => themes[p.themeSelected].buttonGo.bgBorder};
  padding-top: 0;
`;

interface IBase {
  showIcons?: boolean;
}

const baseShowIcons = css`
  margin-left: 6;
  margin-right: 6;
  margin-bottom: 6px;
`;

export const Base = styled.View<IBase>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${(p) => p.showIcons === true && baseShowIcons}
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
  placeholderTextColor: '#ffffff' // substitua pelo código da cor desejada
}))<IInput>`
  flex-grow: 1;
  font-size: ${(p) => (p.size === EInputSize.regular ? "17px" : "20px")};
  padding: 8px 0;
  border-radius: 6px;
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
  height: 18px;
`;

export const LabelBase = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.Text`
  display: flex;
  color: #fff;
  font-size: 15px;
  letter-spacing: 1px;
`;

export const InputBase = styled.Text`
  display: flex;
`;
