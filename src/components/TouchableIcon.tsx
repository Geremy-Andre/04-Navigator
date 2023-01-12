import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colores } from '../theme/appTheme';

interface Props {
    iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {

    const {changeFaviteIcon} = useContext(AuthContext);

    return (
    <TouchableOpacity
        onPress={ () => changeFaviteIcon(iconName)}
    >
        <Icon
            name= {iconName}
            size={50}
            color={colores.primary}
        />
    </TouchableOpacity>
    )
}
