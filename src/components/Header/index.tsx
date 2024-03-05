import { Container, Logo, BackButton } from "./styles";
import logoImg from "../../../assets/logo.png";
import AntIcons from "@expo/vector-icons/AntDesign";
import theme from "../../theme";

type props = {
  showBackButton?: boolean;
}

const Header = ({ showBackButton = false }:props) => {
  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <AntIcons name="left" size={32} color={theme.COLORS.GRAY_300} />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  );
};

export default Header;
