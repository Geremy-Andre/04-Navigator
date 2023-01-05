import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreens = () => {

  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);
  

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top
      }}
    >
        <Text style={styles.title}>SettingsScreens</Text>
        <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  )
}
