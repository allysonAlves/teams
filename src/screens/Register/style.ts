import styled from "styled-components/native";
import { TProps } from "../../@types/themeType";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${(props: TProps) => props.theme.COLORS.GRAY_600};
    padding: 0 24px 24px 24px; 
`;

export const Content = styled.View`
    flex: 1;    
    align-items: center;
`;

export const Title = styled.Text`
    color: ${(props: TProps) => props.theme.COLORS.WHITE};
    font-size: ${(props: TProps) => props.theme.FONT_SIZE.LG}px;
`;