import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Login from './Login';
import Register from './Register';

const TabNavigate = createBottomTabNavigator(
  {
    "SIGN IN": Login,
    "SIGN UP": Register,
  }, {
    tabBarOptions: {
      style: {
        backgroundColor: "#04a5cf",
        borderColor: "red"
      },
      labelStyle: {
        fontSize: 18,
      },
      activeTintColor: "white",
      inactiveTintColor: "gray",
    }
  }
);

class LogScreen extends React.Component {
  //Take user's ID and switch to MainScreen
  handleSubmit = (id) => {
    this.props.navigation.navigate(
      "Main",
      {id: id},
    );
  };

  render() {
    return (
      <TabNavigate screenProps={
        {
          onHandleSubmit: this.handleSubmit
        }
      }
      />
    );
  }
}

export default LogScreen;