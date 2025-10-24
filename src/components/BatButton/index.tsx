import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './styles';
import { BatTextInput } from '../BatTextInput';
import generatePassword from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  
  const [pass, setPass] = useState('');
  
  function handleGenerateButton() {
    const generateToken = generatePassword();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <BatTextInput pass={pass}/>    
      <Pressable 
        onPress={handleGenerateButton}
        style={styles.button}
      >
        <Text style={styles.text}>Generate</Text>
      </Pressable>
      <Pressable 
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>⚡Copy</Text>
      </Pressable>
    </>
  );
}