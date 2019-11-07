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
import {ButtonGroup,Button} from 'react-native-elements'
import {pk} from '../config/sty'
import Ionicons from 'react-native-vector-icons/Ionicons'
import  AntDesign from 'react-native-vector-icons/AntDesign'
// import clear from 'react-native-clear-cache';
import {inject,observer} from 'mobx-react'
@inject(["mbx"])
@observer // 监听当前组件
class My extends Component{
    static navigationOptions = {
        title: '我的',
        // header:null,
        headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
      };
    constructor(props){
        super(props)
        this.state={
            selectedIndex: 0,
            cacheSize:"0",
            unit:"M",
        }
        
       
    }
    
    // clearCache=()=>{

    //     this.setState({cacheSize:'0'})
    
    //   }

tui=()=>{
    AsyncStorage.removeItem('ok')
    this.props.navigation.navigate('Login')
}

now_login=()=>{
    Alert.alert('提示','请登录',[{'text':'稍后',},{'text':'去登录',onPress:()=>{
   this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0) 
    }}])
}  
    render(){
        const login=this.props.mbx.login
        return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000000',alignItems:'center'}}>
         <View style={{width:pk.w,height:pk.h*.25,
                alignItems:'center',
                justifyContent:'center'
                }}>
           <Image source={require('../images/park.png')} 
            style={{width:100,height:100}} 
           />
           </View>
           <TouchableOpacity style={{flexDirection:'row',
           justifyContent:'space-between',width:'100%',padding:20,
           alignItems:'center',
           borderBottomWidth:1,
           borderBottomColor:'#D7DBDD'
           }} onPress={()=>{
               this.props.navigation.navigate('About')
           }}>
               <View style={{flexDirection:'row'}}>
              <AntDesign name='laptop' style={{width:pk.w*.15,fontSize:22,color:pk.theme}}/>
              <Text style={{fontSize:18,color:'white'}}>关于我们</Text>
               </View>
               <Ionicons name='ios-arrow-forward' style={{fontSize:22,color:'white'}}/>
           </TouchableOpacity>
           <TouchableOpacity style={{flexDirection:'row',
           justifyContent:'space-between',width:'100%',padding:20,
           alignItems:'center',
           borderBottomWidth:1,
           borderBottomColor:'#D7DBDD'
           }} onPress={()=>{
               login?
               this.props.navigation.navigate('Feedback')
               :
               this.now_login()
           }}>
               <View style={{flexDirection:'row'}}>
              <AntDesign name='bulb1' style={{width:pk.w*.15,fontSize:22,color:pk.theme}}/>
              <Text style={{fontSize:18,color:'white'}}>意见反馈</Text>
               </View>
               <Ionicons name='ios-arrow-forward' style={{fontSize:22,color:'white'}}/>
           </TouchableOpacity>

         
           <Button title={login?'退出':'请登录'} buttonStyle={{width:pk.w*.9,
          backgroundColor:pk.theme,marginTop:30
        }} onPress={()=>{
            this.tui()

        }}/>
        </SafeAreaView>
        )
    }
}

export default My

const styles=StyleSheet.create({
    a:{
        width:pk.w*.9,height:pk.h*.08,
        backgroundColor:'#2C3E50',marginTop:50,borderRadius:6,
        alignItems:'center',justifyContent:'center'
    }
})