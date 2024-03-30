import styled from "styled-components/native";
import { TProps } from "../../@types/themeType";
import { SafeAreaView } from 'react-native-safe-area-context';


export const Container = styled(SafeAreaView)`   
  flex: 1;
  background-color: ${(props: TProps) => props.theme.COLORS.GRAY_600};
  padding: 0 24px 24px 24px;
`