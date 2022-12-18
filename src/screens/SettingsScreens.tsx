import React from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsScreens = () => {

  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top
      }}
    >
        <Text style={styles.title}>SettingsScreens</Text>
    </View>
  )
}
