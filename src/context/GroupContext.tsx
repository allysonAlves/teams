import { createContext, useContext, useEffect, useState } from "react";
import { ChildrenProps, Group, Student } from "../@types/globalTypes";
import { storageGroupsGet, storageGroupsRemove, storageGroupsSave } from "../storage/Groups.storage";
import { Axios } from "../services/AxiosBasic";

type GroupContextType = {
  groups: Group[]; 
  isLoading: boolean;
  insertGroup: (groupName: string) => Promise<void>;
  deleteGroup: (group: Group) => void;
  getGroups: () => void;
  getGroup: (groupName: string) => Promise<Group | undefined>;
  insertStudent: (student: Student, group: Group) => Promise<void>;
  deleteStudent: (student: string, group: Group) => Promise<void>;
};

const GroupContext = createContext({} as GroupContextType);

export const GroupProvider = ({ children }: ChildrenProps) => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [isLoading, setIsLoading] = useState(false);        

    const insertGroup = async (groupName: string) => { 
        const newGroupList = [...groups, {name: groupName, students: []}]; 

        setGroups(newGroupList);
        await storageGroupsSave(newGroupList);       
    }

    const deleteGroup = (group: Group) => {
        const newGroups =  groups.filter(item => item.name != group.name)

        setGroups(newGroups);
        storageGroupsSave(newGroups);
    }

    const getGroups = async () => {        
        try{    
            setIsLoading(true);

            const savedGroups = await storageGroupsGet();
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('');
                }, 2000);
            })

            if(savedGroups){
                setGroups(JSON.parse(savedGroups));
            }
        }catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    const getGroup = async (groupName: string) => {
        try{
           return groups.find(g => g.name == groupName);
        }catch(err) {            
            console.log(err);
        }
    }

    const insertStudent = async (student: Student, group: Group) => {

        Axios.get('api/userOrders').then((response) => {
            console.log(response.data)
        }).catch(() => {})

        const groupIndex = groups.indexOf(group);
        const newGroupList = [...groups];       
        newGroupList[groupIndex].students.push(student);
        setGroups(newGroupList);
        await storageGroupsSave(newGroupList);       
    }

    const deleteStudent = async (studentName: string, group: Group) => {
        const groupIndex = groups.indexOf(group);
        const newGroupList = [...groups];       
        newGroupList[groupIndex].students =  newGroupList[groupIndex].students.filter(item => item.name != studentName);
        setGroups(newGroupList);
        await storageGroupsSave(newGroupList);         
    }

    return (
        <GroupContext.Provider value={{groups, isLoading, insertStudent, deleteStudent,getGroup, getGroups, insertGroup,deleteGroup}}>
            {children}
        </GroupContext.Provider>
    )
};

export const useGroups = () => {
    return useContext(GroupContext);
}
