import { Container } from './styles';

import Header from '../../components/Header';
import Highlight from '../../components/Highlight';
import GroupCard from '../../components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import ListEmpty from '../../components/ListEmpty';
import Button from '../../components/Button';

export default function Groups() {
  const [groups, setGroups] = useState([]);

  return (
    <Container>
      <Header/>

      <Highlight 
      title='Turmas' 
      subtitle='jogue com sua turma'/>
      
      <FlatList
        style={{width: '100%'}}
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex:1}}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma?"/>
        }
      />

      <Button title='Criar nova turma'/>

    </Container>
  )
}