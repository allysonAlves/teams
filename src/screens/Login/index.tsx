import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, Content, Label } from './style';
import Highlight from '../../components/Highlight';
import { useAuth } from '../../context/AuthContext';

const Login = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, registerUser } = useAuth();

    const handleSubmit = () => {
        if(!!email && !!password)
            signIn(email, password);
    }
    const handleRegister = () => {
        if(!!email && !!password)
            registerUser(email, password);
    }

  return (
    <Container>         
        <Header/>
        <Content>
            <Highlight title='Login' subtitle=''/>    

            <Input
                onChangeText={(value) => setEmail(value)} 
                placeholder='E-mail'
            />
            
            <Input 
                style={{marginTop: 15}}
                onChangeText={(value) => setPassword(value)}
                placeholder='Senha' 
                secureTextEntry
            />

            <Button 
                style={{marginTop: 15}}
                title='Login' 
                onPress={handleSubmit}
            />

            <Button 
                style={{marginTop: 15}}
                title='Register' 
                onPress={handleRegister}
            />
        </Content>
       
    </Container>
  )
}

export default Login