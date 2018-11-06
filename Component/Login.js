import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler,
  TouchableWithoutFeedback, Keyboard, ScrollView, ToastAndroid
} from 'react-native';
import {styles} from './../Styles';
import Logo from './Logo';
import {callAPI} from '../utils/APIcaller';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  //Custom hardware back button handlers
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  //Exit apps when user click hardware back button
  handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  //Get all user from server and check with infomation of user
  //true -> login
  //false -> show error
  handleSubmit = () => {
    let flag = false;
    if (this.state.username === "" || this.state.password === "") {
      ToastAndroid.show("Username và password không được rỗng", ToastAndroid.SHORT);
    } else {
      callAPI("GET", "user", null).then(res => {
        res.data.map((user) => {
          if (this.state.username === user.username) {
            flag = true;
            if (this.state.password !== user.password) {
              ToastAndroid.show("Mật khẩu không trùng khớp", ToastAndroid.SHORT);
            } else {
              this.setState({
                username: "",
                password: "",
              });
              this.props.screenProps.onHandleSubmit(user.id);
            }
          }
        });
        !flag ? ToastAndroid.show("Username không tồn tại", ToastAndroid.SHORT) : null;
        this.setState({
          password: "",
        });
      });
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TouchableWithoutFeedback behavior="padding" onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Logo/>
            <View style={styles.infoContent}>
              <Text style={styles.iptTitle}>Username:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter username or email"
                keyboardType="email-address"
                returnKeyType="next"
                value={this.state.username}
                onChangeText={(username) => {
                  this.setState({
                    username,
                  });
                }}
                onSubmitEditing={() => this.refs.password.focus()}
                />
              <Text style={styles.iptTitle}>Password:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                type="password" ref="password"
                value={this.state.password}
                onChangeText={(password) => {
                  this.setState({
                    password,
                  });
                }}
                secureTextEntry={true}
                />
              <TouchableOpacity
                style={styles.btn}
                ref="btnLogin"
                onPress={this.handleSubmit}>
                <Text style={styles.btnText}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

export default Login;