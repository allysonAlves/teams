import React from 'react'
import Header from '../../components/Header'
import { Container } from './style'
import Input from '../../components/Input'
import Highlight from '../../components/Highlight'

const Register = ({navigation, route} : any) => {
  return (
    <Container>
        <Header showBackButton/>
        <Highlight title='Cadastrar' subtitle='Cadastre-se e aproveite'/> 
        <Input/>       
    </Container>
  )
}

export default Register