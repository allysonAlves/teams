import styled from "styled-components/native";
import theme from "../../theme";

type ThemeType = {
  theme:  typeof theme;
};

export const Container = styled.View`   
  flex: 1;
  background-color: ${(props: ThemeType) => props.theme.COLORS.GRAY_600};
  padding: 0 24px 24px 24px;
`

export const Title = styled.Text`
  color: white;
  font-size: 22px;
`