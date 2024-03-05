import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";
import { TProps } from "../../@types/themeType";
import { ReactElement } from "react";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;

    background-color: ${({theme, type}: TProps & Props) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

    align-items: center;
    justify-content: center;
    border-radius: 6px;
`;

export const Title = styled.Text`
    ${({theme}: TProps) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${ theme.COLORS.WHITE };
        font-family: ${ theme.FONT_FAMILY.BOLD };
    `}
`;