import React from "react";
import { Container, DeleteIcon, Icon, Title } from "./styles";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  onDelete: (studentName: string) => void;
};

const StudentCard = ({ title, onDelete, ...rest }: Props) => {

  return (
    <Container {...rest}>
      <Icon name="person-2" />
      <Title>{title}</Title>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => onDelete(title)}>
          <DeleteIcon name="delete" />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default StudentCard;
