import styled from "styled-components/native";
import { TProps } from "../../@types/themeType";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({theme}: TProps) => theme.COLORS.GRAY_600};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({theme}: TProps) => ({
    color: theme.COLORS.GREEN_700
}))``;