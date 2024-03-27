import React, { useEffect, useState } from "react";
import { FlatList, Keyboard } from "react-native";

import { useGroups } from "../../context/GroupContext";
import { Group, Student } from "../../@types/globalTypes";

import Input from "../../components/Input";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ListEmpty from "../../components/ListEmpty";
import Highlight from "../../components/Highlight";
import StudentCard from "../../components/StudentCard";

import { Container } from "./style";

const GroupDetails = ({route, navigation}: any) => {
  const [currentGroup, setCurrentGroup] = useState({} as Group);
  const [student, setStudent] = useState({} as Student);
  
  const { groups, getGroup, insertStudent, deleteStudent } = useGroups();

  const getCurrentGroup = async () => {
    const group = await getGroup(route.params?.groupName);

    if(group){
      setCurrentGroup(group);
    }
    else
      navigation.pop();
  }

  const handleAddStudent = async () => {    
    insertStudent(student, currentGroup);
    setStudent({name: ''});
    Keyboard.dismiss();
  }

  const handleRemoveStudent = async (name: string) => {
    deleteStudent(name, currentGroup);
  }

  useEffect(() => {
   getCurrentGroup();
  },[groups]);

  return (
    <Container>

      <Header showBackButton/>

      <Highlight 
        title='Turma'
        subtitle={currentGroup.name}
      />     

      <Input
        placeholder="nome do estudante"
        onChangeText={(text) => 
        setStudent({name: text})}
        onSubmitEditing={handleAddStudent}
        value={student.name}
      /> 

      <Button 
        onPress={handleAddStudent}
        style={{marginTop:10}} 
        title="Adicionar"
      />

      <FlatList
        style={{width: '100%', marginTop:15}}
        data={currentGroup.students}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <StudentCard 
            title={item.name}
            onDelete={handleRemoveStudent}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex:1}}
        ListEmptyComponent={          
            <ListEmpty message="Que tal cadastrar o primeiro estudante?"/>         
        }
      />
    </Container>
  );
};

export default GroupDetails;
