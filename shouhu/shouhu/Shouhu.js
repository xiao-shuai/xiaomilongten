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
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS,ProgressBarAndroid
} from 'react-native'
import {pk} from '../config/sty'
import SplashScreen from 'react-native-splash-screen';
import {inject,observer} from 'mobx-react'
import { NavigationActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
@inject(["mbx"])
@observer // 监听当前组件
class Shouhu extends Component{
    static navigationOptions = {
        // title: 'relese',
        header:null,
        headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
      };
    constructor(props){
        
        super(props)
        this.state={
           show:true,
           progress: 0,
        }
    }
componentDidMount(){
    SplashScreen.hide(); //
}


   componentWillMount (){
     
       AsyncStorage.getItem('ok')
       .then(res=>{
           console.log('res',res);      
        if(res!==null){
         this.props.mbx.change_login(true)  
        }
       })
       .catch(err=>{
        
       })

   fetch('https://www.fastmock.site/mock/7b7807bc0b02343d47fe3a02771b9a11/shouhupark/userinfo')
   .then(res=>res.json())
   .then()
   .catch()

    }

  now_login=()=>{
      Alert.alert('提示','请登录',[{'text':'返回',},{'text':'去登陆',onPress:()=>{
     this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0) 
      }}])
  }  
    render(){
        console.log('q122',this.props.mbx.login,
         'a',this.state.a,this.state.b,this.state.show,
         this.state.progress
        );
        const login=this.props.mbx.login
        return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000000',alignItems:'center'}}>
                <Image source={require('../images/park.png')} 
                    style={{width:100,height:100,marginTop:pk.h*.1}} 
                 />

                 <TouchableOpacity style={styles.a} onPress={()=>{
                     login?
                     this.props.navigation.navigate('Wenti')
                     :
                     this.now_login()
                 }}>
                  <Text style={{fontSize:18,color:'white'}}>我要申报</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.a} onPress={()=>{
                     login?
                     this.props.navigation.navigate('Record')
                     :
                     this.now_login()
                 }}>
                 <Text style={{fontSize:18,color:'white'}}>
                  申报记录
                 </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.a} 
                  onPress={()=>{
                    this.props.navigation.navigate('My')
                  }}
                 >
                 <Text style={{fontSize:18,color:'white'}}>
                 个人中心  
                  </Text>
                 </TouchableOpacity>
        </SafeAreaView>
        )
    }
}

export default Shouhu

const styles=StyleSheet.create({
    a:{
        width:pk.w*.9,height:pk.h*.08,
        backgroundColor:'#2C3E50',marginTop:50,borderRadius:6,
        alignItems:'center',justifyContent:'center'
    }
})