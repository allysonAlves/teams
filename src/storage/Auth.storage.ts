import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_KEY } from './storageConfig';

export const storageUserSave = (user: any) => {    
    return AsyncStorage.setItem(AUTH_KEY, JSON.stringify(user));
} 

export const storageUserGet = async () => {    
    return AsyncStorage.getItem(AUTH_KEY);
} 

export const storageUserRemove = () => {
    return AsyncStorage.removeItem(AUTH_KEY);
} 