import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'CoronaDetails':
        iconName = 'globe';
        break;
      case 'ContuctDoctor':
        iconName = 'id-badge';
        break;
      case 'Information':
        iconName = 'qrcode';
        break;
      default:
        break;
    }
  
    return <Icon name={iconName} color={color} size={24} />;
  };

  export default screenOptions