import { Container, Logo, BackButton } from "./styles";
import logoImg from "../../../assets/logo.png";
import AntIcons from "@expo/vector-icons/AntDesign";
import theme from "../../theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";

type props = {
  showBackButton?: boolean; 
  showLogoutButton?: boolean;
}

const Header = ({ showBackButton, showLogoutButton }: props ) => {
  const navigation = useNavigation();

  const { logout } = useAuth();
  
  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={() => {navigation.goBack()}}>
          <AntIcons name="left" size={32} color={theme.COLORS.GRAY_300} />
        </BackButton>
      }

      <Logo source={logoImg} />

      { showLogoutButton &&
        <BackButton style={{alignItems: 'flex-end'}} onPress={logout}>
            <AntIcons name="logout" size={32} color={theme.COLORS.GRAY_300} />
        </BackButton>
      }
    </Container>
  );
};

export default Header;
