import React from 'react';
import {View, Text, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SettingsList from 'react-native-settings-list';
import {styles} from '../Styles';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.backHandler = null;
  }

  //Custom hardware back button handlers
  componentWillMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  //Remove hardware back button handlers
  componentWillUnmount() {
    this.backHandler.remove();
  }

  //Switch to Main Screen when people click hardware back button
  handleBackPress = () => {
    this.props.navigation.navigate("Main");
    return true;
  };

  render() {
    return (
      <View style={{backgroundColor:'#f6f6f6',flex:1}}>
        <View style={{borderBottomWidth:1, backgroundColor:'#263238',borderColor:'#c8c7cc'}}>
          <Text style={{color:'white',marginTop:15,marginBottom:15, marginLeft:15,fontWeight:'bold',fontSize:20}}>Settings</Text>
        </View>
        <View style={{backgroundColor:'#f6f6f6',flex:1}}>
          <SettingsList borderColor='#d6d5d9' defaultItemSize={50}>
            <SettingsList.Item
              hasNavArrow={false}
              title='Wireless & networks'
              titleStyle={{color:'#009688', marginBottom:10, fontWeight:'500'}}
              itemWidth={50}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <MaterialIcon name="data-usage" style={styles.imageStyle}/>
              }
              hasNavArrow={false}
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              title='Data usage'
            />
            <SettingsList.Item
              icon={
                <Icon name="md-more" style={styles.imageStyle}/>
              }
              title='More'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Header headerStyle={{marginTop:-5}}/>
            <SettingsList.Item
              hasNavArrow={false}
              title='Device'
              titleStyle={{color:'#009688', marginBottom:10, fontWeight:'bold'}}
              itemWidth={70}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <AntDesign name="barschart" style={styles.imageStyle}/>
              }
              title='Display'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={
                <AntDesign name="sound" style={styles.imageStyle}/>
              }
              title='Sound & notification'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={
                <Icon name="md-apps" style={styles.imageStyle}/>
              }
              title='Apps'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={
                <MaterialIcon name="storage" style={styles.imageStyle}/>
              }
              title='Storage & USB'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={
                <Icon name="md-battery-dead" style={styles.imageStyle}/>
              }
              title='Battery'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={
                <MaterialIcon name="memory" style={styles.imageStyle}/>
              }
              title='Memory'
              itemWidth={70}
              titleStyle={{color:'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Header headerStyle={{marginTop: -5}}/>
          </SettingsList>
        </View>
      </View>
    );
  }
}

export default Setting;