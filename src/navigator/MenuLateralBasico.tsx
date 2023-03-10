import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreens } from '../screens/SettingsScreens';
import { StackNavigator } from './StackNavigator';
import {useWindowDimensions} from 'react-native'

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerType: width >= 768 ? 'permanent' : 'front'
    }}>
      <Drawer.Screen name="StackNavigator" options={{title: "Home"}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: "Settings"}} component={SettingsScreens} />
    </Drawer.Navigator>
  );
}