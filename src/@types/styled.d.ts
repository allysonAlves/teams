import 'styled-components/native'
import { ThemeType } from './themeType';

declare module "styled-components/native" {  
    export interface DefaultTheme extends ThemeType {}
}
