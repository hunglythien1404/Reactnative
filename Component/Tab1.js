import React from 'react';
import {View, Text, FlatList, Image, ToastAndroid} from 'react-native';
import {styles} from './../Styles';
import {callAPIList} from '../utils/APIcaller';

class Tab1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  //get data from source JSONPLACEHOLDER
  componentWillMount() {
    callAPIList("GET", "posts", null).then(res => {
      this.setState({
        data: res.data,
      });
    })
  }

  //actions when user pull to refresh
  handleRefresh = () => {
    ToastAndroid.show("Refresh", ToastAndroid.SHORT);
  };

  //actions when user loadmore
  handleLoadMore = () => {
    ToastAndroid.show("Đã load hết dữ liệu", ToastAndroid.SHORT);
  };

  render() {
    return (
      <View>
        <FlatList
          refreshing={false}
          onRefresh={() => this.handleRefresh()}
          onEndReachedThreshold={0.2}
          onEndReached={() => this.handleLoadMore()}
          data={this.state.data}
          keyExtractor={(data, index) => {index}}
          renderItem={(data) => {
            return(
              <View key={data.index} style={styles.flatList}>
                <Image
                  source={require ("./../images/gmo.png")}
                  style={styles.flatListImage}
                />
                <View style={styles.flatListContent}>
                  <Text style={styles.itemTitle}>{data.item.id}</Text>
                  <Text style={styles.itemTitle}>{data.item.title}</Text>
                  <Text style={styles.itemContent}>{data.item.body}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default Tab1;