import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';

interface BatTextInputProps {
  pass:string;
}

export function BatTextInput(props: BatTextInputProps) {
  return (
      <TextInput 
        style={styles.inputer}
        placeholder="Click to generate password"
        value={props.pass}
        editable={false} 
      />
  );
} 