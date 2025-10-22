import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';

export function BatTextInput() {
  return (
      <TextInput 
        style={styles.inputer}
        placeholder="Enter text"
        multiline={true}
      />
  );
} 