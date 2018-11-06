import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './../Styles';

class Splash extends React.Component {
  //Switch to LogScreen after 2 seconds
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.push("Log");
    }, 2000)
  }

  render() {
    return (
      <View style={styles.splCont}>
        <Image
          source={require ("./../images/reactjs.jpg")}
          style={styles.splImg}
          />
      </View>
    );
  }
}

export default Splash;