import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
    
    const {top:paddingTop} = useSafeAreaInsets();
    return (
    <Tab.Navigator
        style={{paddingTop}}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={{
            tabBarPressColor: colores.primary
        }}
    >
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
    );
}