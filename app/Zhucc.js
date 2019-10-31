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
import {NavigationActions} from 'react-navigation'
import {yangs} from './yangshi'
import { Input ,Button,Divider} from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast'
@inject('allData')
@observer
class Zhucc extends Component{
    constructor(props){
        super(props)
        this.state={
             
        }
    }
   

     componentDidMount(){
       
      }
   
 reggggg=()=>{
  if(this.state.acc==undefined){
    return this.refs.toast.show('Please enter your account number',1000)
}else if(this.state.pass==undefined) {
    return this.refs.toast.show('Please enter password',1000)
}else if(this.state.pass!==this.state.pass2){
   return this.refs.toast.show('Password inconsistency',1000)
}
fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/login',{
  method:'POST'
})
.then(res=>res.json())
.then(res=>{console.log('ress:',res)})
.catch(err=>{console.log('err:',err)})

  AsyncStorage.setItem('qqq','ok')

  this.props.navigation.reset([NavigationActions.navigate({ routeName: 'llllyyy' })], 0)



 }     
  

  render(){
      console.log('qwq',this.props.allData.text)
       return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{flex:1,width:'100%',alignItems:'center',backgroundColor:yangs.themehui}}>

        <KeyboardAwareScrollView contentContainerStyle={{width:yangs.wd,alignItems:'center'}}>
        

     <View style={{width:'100%',backgroundColor:'white',
     marginTop:yangs.hg*.1,flexDirection:'row',padding:10,
     justifyContent:'space-between',alignItems:'center'
     }} >
         <Text style={{fontSize:yangs.wd*.05}}>account</Text>
         <Input containerStyle={{width:'70%',borderColor:yangs.themehui2,borderWidth:1}}
             inputContainerStyle={{borderBottomColor:'white'}}
             placeholder={'Enter account'}
             onChangeText={(acc)=>{
             this.setState({acc})
             }}
         />
     </View>

     <View style={{width:'100%',backgroundColor:'white',
     marginTop:10,flexDirection:'row',padding:10,
     justifyContent:'space-between',alignItems:'center'
     }} >
         <Text style={{fontSize:yangs.wd*.05}}>password</Text>
         <Input containerStyle={{width:'70%',borderColor:yangs.themehui2,borderWidth:1}}
             inputContainerStyle={{borderBottomColor:'white'}}
             placeholder={'Enter the password'}
             secureTextEntry={true}
             onChangeText={(pass)=>{
              this.setState({pass})
             }}
         />
     </View>

     <View style={{width:'100%',backgroundColor:'white',
     marginTop:10,flexDirection:'row',padding:10,
     justifyContent:'space-between',alignItems:'center'
     }} >
         <Text style={{fontSize:yangs.wd*.05}}>password</Text>
         <Input containerStyle={{width:'70%',borderColor:yangs.themehui2,borderWidth:1}}
             inputContainerStyle={{borderBottomColor:'white'}}
             placeholder={'Confirm password'}
             secureTextEntry={true}
             onChangeText={(pass2)=>{
               this.setState({pass2})
             }}
         />
     </View>

     <Button buttonStyle={{width:yangs.wd*.95,marginTop:20}} title="registered" onPress={()=>{
       this.reggggg()
     }}/>
          
        </KeyboardAwareScrollView>    


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
export default Zhucc

const styles=StyleSheet.create({
    
    
})