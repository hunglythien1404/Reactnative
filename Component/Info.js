import React from 'react';
import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {callAPI} from './../utils/APIcaller';
import {styles} from '../Styles';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: '',
      password: "",
    };
    this.backHandler = null;
  }

  //Custom hardware back button handlers and get user data by ID
  componentWillMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    callAPI("GET", "user/" + this.props.navigation.state.params.id, null).then(res => {
      this.setState({
        id: res.data.id,
        username: res.data.username,
        password: res.data.password,
      });
    })
  }

  //remove hardware back button handlers
  componentWillUnmount() {
    this.backHandler.remove();
  }

  //switch to Main screen when user press hardware back button
  handleBackPress = () => {
    this.props.navigation.navigate("Main");
    return true;
  };

  //switch to LogScreen when user click Log out
  handleLogout = () => {
    this.props.navigation.navigate("Log");
  };

  render() {
    return (
      <View style={styles.userInfo}>
        <Icon name="md-person" size={100}/>
        <View style={{marginBottom: 15}}>
          <View style={{flexDirection: "row"}}>
            <Text>ID: </Text>
            <Text>{this.state.id}</Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text>Username: </Text>
            <Text>{this.state.username}</Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text>Password: </Text>
            <Text>{this.state.password}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.handleLogout}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Info;