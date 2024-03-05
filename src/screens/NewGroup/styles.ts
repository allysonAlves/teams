import styled from "styled-components/native";
import { TProps } from "../../@types/themeType";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props: TProps) => props.theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;
