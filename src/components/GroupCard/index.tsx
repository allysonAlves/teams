import React from "react";
import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
}

const GroupCard = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest} >
      <Icon name="groups-3" />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupCard;
