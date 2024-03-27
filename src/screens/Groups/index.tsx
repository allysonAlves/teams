import { Container } from './styles';
import Header from '../../components/Header';
import Highlight from '../../components/Highlight';
import GroupCard from '../../components/GroupCard';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import ListEmpty from '../../components/ListEmpty';
import Button from '../../components/Button';
import { useGroups } from '../../context/GroupContext';
import Loading from '../../components/Loading';

export default function Groups({navigation}: any) {

  const { groups, isLoading, getGroups } = useGroups();

  const handleAddNew = () => {
    navigation.navigate('NewGroup');
  } 

  const handleOpenDetail = (groupName: string) => {
    navigation.navigate('GroupDetails', {groupName})
  }

  useEffect(() => {
    getGroups();
  },[])

  return (
    <Container>
      <Header showLogoutButton/>

      <Highlight 
        title='Turmas' 
        subtitle='jogue com sua turma'
      />

      {isLoading ? (
        <Loading/>
      ) : (
        <>
          <FlatList
            style={{width: '100%'}}
            data={groups}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <GroupCard 
                title={item.name}
                onPress={() => handleOpenDetail(item.name)}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex:1 }}
            ListEmptyComponent={
              <ListEmpty message="Que tal cadastrar a primeira turma?"/>
            }
          />      
        </>
      )}
      
      <Button 
        title='Criar nova turma'
        onPress={handleAddNew}
      />        

    </Container>
  )
}