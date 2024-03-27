import React, { useState } from "react";
import { Container, Content } from "./styles";
import { useTheme } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

import Header from "../../components/Header";
import Highlight from "../../components/Highlight";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useGroups } from "../../context/GroupContext";

const NewGroup = ({navigation}: any) => {
  const [groupName, setGroupName] = useState('');

    const { COLORS } = useTheme();

    const { insertGroup } = useGroups();

    const handleSubmit = async () => {
      try{
        if(!!groupName)
          await insertGroup(groupName);

          navigation.pop();
      } catch {

      }
    }
    
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
          style={{marginTop:25}}
            placeholder="Nome da turma"
            onChangeText={(value) => setGroupName(value)}
        />

        <Button
            title="Criar"
            style={{marginTop: 16}}
            onPress={handleSubmit}
        />
      </Content>
    </Container>
  );
};

export default NewGroup;
