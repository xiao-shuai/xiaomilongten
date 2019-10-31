import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,Platform,
    SafeAreaView,
    Linking
} from 'react-native'
import {observer,inject} from 'mobx-react';
import {yangs} from '../yangshi'

yuu=()=>{

}

syy=()=>{
    
}

export default class rr extends Component{
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.renderPage = this.renderPage.bind(this);
        this.onBeyondRange = this.onBeyondRange.bind(this);
        this.state = {
          dataSource: new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
          }),
          loadingStatus: LoadingManagerView.Loading
        };
      }
    
    render(){

    }
}

fetchData()=()=> {
    this.setState({//加载
      loadingStatus: LoadingManagerView.Loading
    });
    getLatestPictureIdList().then(idList => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithPages(idList),
        loadingStatus: LoadingManagerView.LoadingSuccess
      });
    }).catch(() => {
      this.setState({//加载
        loadingStatus: LoadingManagerView.LoadingError
      });
    });
  }
getNavigationBarProps=()=> {
    return {
      leftButtonImage: require('../image/search_min.png'),
      rightButtonImage: require('../image/individual_center.png'),
      title: 'ONE'
    };
  }

 

