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
import { Input ,Button,Badge} from 'react-native-elements';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
@inject('allData')
@observer
class Twoo extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
        this.asddqwr=[
            
            {
                title:'The phone number',
                content:'+8613478654675',
            },
            {
                title:'Email',
                content:'suder@gmail.com',
            },
            {
                title:'work time',
                content:'Monday to Friday,9:00-6:00'
            },
            {
              title:'Address',
              content:'32 kexing west road, changpingqu street, shanxi'
          },
        ]
    }
   

     componentDidMount(){
         fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/data')
         .then(res=>res.json())
         .then(res=>{}).catch(er=>{})
      }
      // <Image source={require('../app/images/suder.png')} 
      //          resizeMode={'contain'}
      //          style={{
      //              width:yangs.wd*.25,height:yangs.wd*.3
      //          }}/>
      //          <Text>v 1.0</Text>

      // <Image source={require('../app/images/suder.png')} 
      //          resizeMode={'contain'}
      //          style={{
      //              width:yangs.wd*.25,height:yangs.wd*.3
      //          }}/>
      //          <Text>v 1.0</Text>
      // <Image source={require('../app/images/suder.png')} 
      //          resizeMode={'contain'}
      //          style={{
      //              width:yangs.wd*.25,height:yangs.wd*.3
      //          }}/>
      //          <Text>v 1.0</Text>
      // <Image source={require('../app/images/suder.png')} 
      //          resizeMode={'contain'}
      //          style={{
      //              width:yangs.wd*.25,height:yangs.wd*.3
      //          }}/>
      //          <Text>v 1.0</Text>
      // <Image source={require('../app/images/suder.png')} 
      //          resizeMode={'contain'}
      //          style={{
      //              width:yangs.wd*.25,height:yangs.wd*.3
      //          }}/>
      //          <Text>v 1.0</Text>

     
     
      onBeyondRange(num) {
        if (num < 0) {
          Toast.show('右拉刷新界面');
        } else {
          Toast.show('左滑进入往期列表');
          getNavigator().push({
            name: 'BeforeMonthList',
            ...(appearTime.music),
            onPress: this.onPress
          });
        }
      }
      onPress(rowData) {
        // rowData[0] year
        // rowData[1] month 0~11
        //跳转到新的页面
        getNavigator().push({
          name: 'MusicListPage',
          year: rowData[0],
          month: rowData[1]
        });
      }
      onRightPressed() {
        getNavigator().push({
          name: 'MyGithubPage'
        });
      }
    
  render(){
      console.log('qwq',this.props.allData.text)
       return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <ScrollView contentContainerStyle={{alignItems:'center'}}>
        <View style={{flex:1,width:'100%',alignItems:'center',}}>
         {
           this.asddqwr.map((i,j)=>{
            return(
                <View style={{width:yangs.wd*.9,marginTop:20}} key={j}>
                <Badge value={i.title} badgeStyle={{width:'100%',height:yangs.hg*.05}} 
                 textStyle={{fontSize:yangs.wd*.05}}
                />
                 <Text style={{fontSize:18,color:yangs.themeColor,marginTop:15}}>{i.content}</Text>
                </View>
            )
           })
         }
         <Image source={require('../images/aa.png')} 
          style={styles.dt}
         />

        {/* <MapView 
          style={styles.dt}
          initialRegion={{
            latitude: 39.9863275788,
            longitude:116.3544845581,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
          <Marker coordinate={{
             latitude: 39.9853275788,
             longitude:116.3644845581,
            }} pinColor={'#00FA9A'}>
            <Callout style={styles.aacallout} >
             <View style={{}}>
                <Text>Beijing HuiLongGuan street </Text>
             </View>
            </Callout>
          </Marker>
          </MapView> */}
        </View>
        </ScrollView>
       </SafeAreaView>
       )
  }

}
export default Twoo

const styles=StyleSheet.create({
    aacallout:{
        width:yangs.wd*.5,
        padding:6,
        opacity:.7
    },
    dt:{
        width:yangs.wd,
        height:yangs.hg*.25,
        marginTop:20
     },
     

})