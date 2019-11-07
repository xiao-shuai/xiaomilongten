import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,StatusBar,
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS
} from 'react-native'
import {pk} from '../config/sty'
import {Input,Button } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {inject,observer} from 'mobx-react'
@inject(["mbx"])
@observer // 监听当前组件
class Wenti extends Component{
    static navigationOptions = {
        title: '问题发布',
        // header:null,
        headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
      };
    constructor(props){
        
        super(props)
        this.state={

        }
    }

  sub=()=>{
   if(this.state.name==undefined){
       return Alert.alert('提示','请输入姓名',[{'text':'知道了'}])
   }
   
   if(this.state.phone==undefined){
    return Alert.alert('提示','请输入电话',[{'text':'知道了'}])
    }
    if(this.state.add==undefined){
        return Alert.alert('提示','请输入车间',[{'text':'知道了'}])
    }
    if(this.state.tit==undefined){
        return Alert.alert('提示','请输入问题',[{'text':'知道了'}])
    }
    if(this.state.wt==undefined){
        return Alert.alert('提示','请输入问题详情',[{'text':'知道了'}])
    }
   
    let a={
        tit:this.state.tit,
        add:this.state.add,
    }

    this.props.mbx.save_(a)
    this.props.navigation.navigate('Record')

    fetch('https://www.fastmock.site/mock/7b7807bc0b02343d47fe3a02771b9a11/shouhupark/get')
    .then(res=>res.json())
    .then(res=>{})
    .catch(err=>{})
 

  }

    render(){
        return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000000',alignItems:'center'}}>
            <KeyboardAwareScrollView >
             
            <Input label='姓名' containerStyle={{
                marginTop:20
            }} 
            placeholder='姓名'
            selectionColor={'white'}
            placeholderTextColor='red'
             inputStyle={{color:'white'}}
             labelStyle={{color:'white'}}
             onChangeText={(name)=>{
                 this.setState({name})
             }}
            />
             <Input label='联系电话' containerStyle={{
                marginTop:20
            }} 
            placeholder='联系电话'
            selectionColor={'white'}
            placeholderTextColor='red'
             inputStyle={{color:'white'}}
             labelStyle={{color:'white'}}

             onChangeText={(phone)=>{
                 this.setState({phone})
             }}
            /> 
            <Input label='详细车间' containerStyle={{
                marginTop:20
            }} 
            placeholder='详细车间'
            selectionColor={'white'}
            placeholderTextColor='red'
             inputStyle={{color:'white'}}
             labelStyle={{color:'white'}}
             onChangeText={(add)=>{
                 this.setState({add})
             }}
            />
            <Input label='发布问题' containerStyle={{
                marginTop:20
            }} 
            selectionColor={'white'}
             placeholder='请用一句话描述问题'
             placeholderTextColor='red'
             inputStyle={{color:'white'}}
             labelStyle={{color:'white'}}
             onChangeText={(tit)=>{
                 this.setState({tit})
             }}
            />

            <View style={{width:pk.w*.9,
            height:pk.h*.2,
            marginTop:20,
            borderRadius:8,
            borderWidth:1,
            borderColor:'white',
            padding:10
            }}>
                <TextInput style={{
                    height:'100%',
                    
                    color:'white'
                }}
                 multiline={true}
                 selectionColor={'white'}
                 placeholder='问题详细描述'
                 placeholderTextColor={'red'}
                 onChangeText={(wt)=>{
                     this.setState({wt})
                 }}
                />

            </View> 
         <Button buttonStyle={{backgroundColor:pk.theme,marginTop:25}} title='发布' 
           onPress={()=>{
               this.sub()
           }}
         />
            </KeyboardAwareScrollView>
        </SafeAreaView>
        )
    }
}

export default Wenti

const styles=StyleSheet.create({
    a:{
        width:pk.w*.9,height:pk.h*.08,
        backgroundColor:'#2C3E50',marginTop:50,borderRadius:6,
        alignItems:'center',justifyContent:'center'
    }
})