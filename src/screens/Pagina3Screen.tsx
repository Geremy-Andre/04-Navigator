import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style = {styles.globalMargin}>
        <Text style= {styles.title} >Pagina3Screen</Text>
        <Button
          title='Regresar'
          onPress={ () => navigation.pop()}
        />
        <Button
          title='Ir a pagina 1'
          onPress={ () => navigation.popToTop()}
        />
        
    </View>
  )
}
