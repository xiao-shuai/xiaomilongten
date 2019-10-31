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
    SafeAreaView
} from 'react-native'
import {observer,inject} from 'mobx-react';
import {yangs} from './yangshi'
import { Input ,Button} from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast'
@inject('allData')
@observer
class AAAbout extends Component{
    constructor(props){
        super(props)
        this.state={
             date:"",
             data2:"",
        }
    }
   

     componentDidMount(){
       fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/aboutteww')
       .then(res=>res.json())
       .then(res=>{})
       .catch(err=>{

       })
      }

  

  render(){
      console.log('qwq',this.props.allData.text)
       return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{flex:1,width:'100%',alignItems:'center'}}>
           <View style={{width:'100%',height:yangs.hg*.25,
           alignItems:'center',justifyContent:'center',
        //    backgroundColor:'gold'
           }}>
               <Image source={require('../app/images/suder.png')} 
               resizeMode={'contain'}
               style={{
                   width:yangs.wd*.25,height:yangs.wd*.3
               }}/>
               <Text>v 1.0</Text>
            </View> 
            <View style={{width:yangs.wd,height:yangs.hg*.03,backgroundColor:yangs.themehui}}></View>
            <View style={{padding:10}}>
                <Text style={{fontSize:yangs.wd*.05,color:yangs.themeColor,
                    lineHeight:30,letterSpacing:1,textAlignVertical:'center',alignSelf:'flex-start'}}>
                Our APP is an online reservation APP created by suder company, which is convenient 
                for business communication and saves your time. If you have any questions or Suggestions, please contact 010-7867465
                </Text>
            </View>
         
        </View>

        <Toast
       ref="toast"
       position='top'
       opacity={0.8}
       />
     </SafeAreaView>
       )
  }

}
export default AAAbout

const styles=StyleSheet.create({
 
     

})