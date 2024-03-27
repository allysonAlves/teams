import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUPS_KEY } from './storageConfig';

export const storageGroupsSave = (Groups: any) => {   
    return AsyncStorage.setItem(GROUPS_KEY, JSON.stringify(Groups));  
}

export const storageGroupsGet = () => {
    return AsyncStorage.getItem(GROUPS_KEY);
}

export const storageGroupsRemove = () => {
    return AsyncStorage.removeItem(GROUPS_KEY);
}