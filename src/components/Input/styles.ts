import { TextInput } from "react-native";
import styled,{ css } from "styled-components/native";
import { TProps } from "../../@types/themeType";

export const Container: typeof TextInput = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    border-radius: 6px;
    padding: 16px;    

    ${({theme}: TProps) => css`
        background-color: ${theme.COLORS.GRAY_700};
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`;