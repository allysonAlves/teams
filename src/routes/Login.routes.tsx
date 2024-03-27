import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from '../screens/Login';
import Register from '../screens/Register';
import { useTheme } from 'styled-components';

const Stack = createNativeStackNavigator();

const LoginRoutes = () => {
    const theme = useTheme();
    const newTheme = DefaultTheme;
    newTheme.colors.background = theme.COLORS.GRAY_600;
  return (
    <NavigationContainer theme={newTheme} >
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
            name="Login"
            component={Login}           
            />
            <Stack.Screen
            name="Register"
            component={Register}           
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoginRoutes