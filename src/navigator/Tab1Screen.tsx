import React, {useEffect} from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores, styles } from '../theme/appTheme';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen effect!');
    
  }, [])
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <Icon name="musical-notes-outline" size={50} color={colores.primary}/>
          <Icon name="car-sport-outline" size={50} color={colores.primary}/>
          <Icon name="color-palette-outline" size={50} color={colores.primary}/>
          <Icon name="cog-outline" size={50} color={colores.primary}/>
        </Text>
        <Text>
          <Icon name="body-outline" size={50} color={colores.primary}/>
          <Icon name="cut-outline" size={50} color={colores.primary}/>
          <Icon name="home-outline" size={50} color={colores.primary}/>
          <Icon name="mic-outline" size={50} color={colores.primary}/>
        </Text>
        <Text>
          <Icon name="game-controller-outline" size={50} color={colores.primary}/>
          <Icon name="headset-outline" size={50} color={colores.primary}/>
          <Icon name="hardware-chip-outline" size={50} color={colores.primary}/>
          <Icon name="layers-outline" size={50} color={colores.primary}/>
        </Text>
    </View>
  )
}
