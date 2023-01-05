import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreens } from '../screens/SettingsScreens';
import { StackNavigator } from './StackNavigator';
import {TouchableOpacity, useWindowDimensions} from 'react-native'
import { Image, View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent= {(props) => <MenuInterno {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreens} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style= {styles.avatarContainer}>
        <Image
          source={{
            uri:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones del menu */}
      <View style= {styles.menuContainer}>
        <TouchableOpacity
          style= {{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Icon name='compass-outline' size={25} color='black'/>
          <Text style= {styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style= {{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Icon name='cog-outline' size={25} color='black'/>
          <Text style= {styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
      {/* <Text style= {styles.tareaTexto}>@Geremy170430Cova</Text> */}
    </DrawerContentScrollView>
  )
}