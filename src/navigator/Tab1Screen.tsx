import React, {useEffect} from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';
import { colores, styles } from '../theme/appTheme';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen effect!');
    
  }, [])
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
        <Text>

          <TouchableIcon iconName='planet-outline'/>
          <TouchableIcon iconName='alarm-outline'/>
          <TouchableIcon iconName='american-football-outline'/>
          <TouchableIcon iconName='attach-outline'/>
          <TouchableIcon iconName='beer-outline'/>
          <TouchableIcon iconName='bicycle-outline'/>
          <TouchableIcon iconName='camera-outline'/>
          <TouchableIcon iconName='cart-outline'/>
          <TouchableIcon iconName='finger-print-outline'/>
          <TouchableIcon iconName='skull-outline'/>
          
        </Text>
    </View>
  )
}
