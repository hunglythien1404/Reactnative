import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Splash from './Component/Splash';
import LogScreen from './Component/LogScreen';
import MainScreen from './Component/MainScreen';
import Info from './Component/Info';
import Setting from './Component/Setting';

const Navigate = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      }
    },
    Log: {
      screen: LogScreen,
      navigationOptions: {
        header: null,
      }
    },
    Main: {
      screen: MainScreen,
    },
    "UserInfo": Info,
    "Setting": Setting,
  }
);

class App extends React.Component {
  render() {
    return (
      <Navigate/>
    );
  }
}

export default App;