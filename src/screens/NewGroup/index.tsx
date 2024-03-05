import React from "react";
import { Container, Content } from "./styles";
import { useTheme } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

import Header from "../../components/Header";
import Highlight from "../../components/Highlight";
import Button from "../../components/Button";
import Input from "../../components/Input";

const NewGroup = () => {
    const { COLORS } = useTheme();
    
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <MaterialIcons
            size={56} 
            name="groups-3" 
            color={COLORS.GREEN_700}
            style={{alignSelf: 'center'}}
        />

        <Highlight 
            title="Nova turma" 
            subtitle="crie a turma para adicionar as pessoas" 
        />
        
        <Input
            placeholder="Nome da turma"
        />

        <Button
            title="Criar"
            style={{marginTop: 16}}
        />
      </Content>
    </Container>
  );
};

export default NewGroup;
