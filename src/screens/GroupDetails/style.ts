import styled from "styled-components/native";
import { TProps } from "../../@types/themeType";


export const Container = styled.View`   
  flex: 1;
  background-color: ${(props: TProps) => props.theme.COLORS.GRAY_600};
  padding: 0 24px 24px 24px;
`