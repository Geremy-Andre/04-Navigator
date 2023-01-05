import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from './Tab1Screen';
import { Tab2Screen } from './Tab2Screen';
import { Tab3Screen } from './Tab3Screen';
import { TopTapNavigator } from './TopTapNavigator';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// export const Tabs

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({route}) => ({
          tabBarActiveTintColor: colores.primary,
          tabBarStyle: {
            borderTopColor: colores.primary,
            borderTopWidth: 0,
            elevation: 0,
            backgroundColor: colores.primary,
          },
          tabBarLabelStyle:{
            fontSize: 15,
            color: 'white'
          },
          tabBarIcon: ({color, focused, size}) => {
            // console.log(props);
            let iconName: string = '';
            switch (route.name) {
              case 'Tab1Screen':
                iconName= 'pricetags-outline'
                break;
              case 'Tab2Screen':
                iconName= 'bookmarks-outline'
                break;
              case 'StackNavigator':
                iconName= 'aperture-outline'
                break;
            }
            return <Text style={{color}}>
                      <Icon name={iconName} size={25} color='white'/>
                    </Text>
            
          }
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tap1',tabBarIcon: ()=> <Text style={{color:colores.primary}}>T1</Text>}} component={Tab1Screen} /> */}
      <Tab.Screen name="Tab1Screen" options={{title: 'Tap1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{title: 'Tap2'}} component={TopTapNavigator} />
      <Tab.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}