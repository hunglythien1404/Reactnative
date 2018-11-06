import {Image} from 'react-native';
import {styles} from '../Styles';
import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <Image
        source={require ("./../images/react-native-workshop.jpg")}
        style={styles.logo}
      />
    );
  }
}

export default Logo;