import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback, Keyboard, ScrollView, ToastAndroid
} from 'react-native';
import {styles} from '../Styles';
import Logo from './Logo';
import {callAPI} from './../utils/APIcaller';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirm: "",
    };
  }

  //check register infomation of user, if true -> reigs account
  handleRegister = () => {
    let flag = true;
    if (this.state.username === "" || this.state.password === "") {
      ToastAndroid.show("Username và password không được rỗng", ToastAndroid.SHORT);
    } else {
      callAPI("GET", "user", null).then(res => {
        res.data.map((user) => {
          //check user exists in database
          if (this.state.username === user.username) {
            ToastAndroid.show("Username đã tồn tại", ToastAndroid.SHORT);
            this.setState({
              username: "",
              password: "",
              confirm: "",
            });
            flag = false;
          }
        });
        if (flag) {
          //check length of username and password
          if (this.state.password.length < 6 || this.state.username.length < 6) {
            ToastAndroid.show("Tên đăng nhập hoặc Mật khẩu phải có ít nhất 6 ký tự", ToastAndroid.SHORT)
          } else if (this.state.password !== this.state.confirm) { //check password confirm
            ToastAndroid.show("Xác nhận mật khẩu không đúng", ToastAndroid.SHORT);
          } else {
            let data = {
              username: this.state.username,
              password: this.state.password
            };
            callAPI("POST", "user", data).then(ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT));
            this.setState({
              username: "",
            });
            this.props.navigation.navigate("SIGN IN");
          }
          this.setState({
            password: "",
            confirm: "",
          });
        }
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
              <Text style={styles.iptTitle} onPress={this.handlePress}>Username:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter username or email"
                returnKeyType="next"
                keyboardType="email-address"
                onSubmitEditing={() => this.refs.password.focus()}
                value={this.state.username}
                onChangeText={(username) => {
                  this.setState({
                    username,
                  });
                }}
                />
              <Text style={styles.iptTitle}>Password:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry={true}
                ref="password"
                onSubmitEditing={() => this.refs.confirm.focus()}
                value={this.state.password}
                onChangeText={(password) => {
                  this.setState({
                    password,
                  });
                }}
                />
              <Text style={styles.iptTitle}>Confirm:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your confirm password"
                secureTextEntry={true}
                ref="confirm"
                value={this.state.confirm}
                onChangeText={(confirm) => {
                  this.setState({
                    confirm,
                  });
                }}
                />
              <TouchableOpacity
                style={styles.btn}
                onPress={this.handleRegister}>
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

export default Register;