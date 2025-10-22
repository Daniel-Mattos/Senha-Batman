import React from 'react';
import { View, Button } from 'react-native';

import { styles } from './styles';

export function BatButton() {
  return (
    <View>
        <Button
            onPress={()=> {console.log("ola")}}
            title='Click aqui'
            accessibilityLabel='click'
            color="red"
        />
    </View>
  );
}