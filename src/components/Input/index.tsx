import { TextInputProps } from "react-native";
import React from "react";
import { Container } from "./styles";

import { useTheme } from "styled-components/native";

const Input = ({ ...rest }: TextInputProps) => {
  const { COLORS } = useTheme();
  return <Container placeholderTextColor={COLORS.GRAY_300} {...rest} />;
};

export default Input;
