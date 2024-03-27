import { View, Text } from "react-native";
import React, { ElementType, ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { ChildrenProps } from "../@types/globalTypes";
import { GroupProvider } from "./GroupContext";

const providers: ElementType[] = [
    AuthProvider,
    GroupProvider
];

const AppProvider = ({ children }: ChildrenProps) => {
  return (
    <>
      {providers.reduceRight(
        (prev, Provider) => (
          <Provider>{prev}</Provider>
        ),
        children
      )}
    </>
  );
};
export default AppProvider;
