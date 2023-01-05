import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
    
    const {top:paddingTop} = useSafeAreaInsets();
    return (
    <Tab.Navigator
        style={{paddingTop}}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={({route}) => ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIconStyle: {
                // backgroundColor: colores.primary
            },
            tabBarStyle: {
                borderTopColor: colores.primary,
                // borderTopWidth: 0,
                shadowColor: 'transparent',
                elevation: 0
            },
            tabBarIcon: ({color, focused, size}) => {
                // console.log(props);
                let iconName: string = '';
                switch (route.name) {
                  case 'Chat':
                    iconName= 'chatbubbles-outline'
                    break;
                  case 'Contacts':
                    iconName= 'people-outline'
                    break;
                  case 'Albums':
                    iconName= 'albums-outline'
                    break;
                }
                return <Text style={{color}}>
                            <Icon name={iconName} size={25} color={colores.primary}/>
                        </Text>
                
              }
        })}
    >
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
    );
}