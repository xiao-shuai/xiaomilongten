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
class About extends Component{
    static navigationOptions = {
        title: 'About',
        // header:null,
        headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
      };
    constructor(props){
        super(props)
        this.state={
            selectedIndex: 0
        }
       
    }
    

    render(){

        return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000000',alignItems:'center'}}>
         <ScrollView contentContainerStyle={{alignItems:'center'}}>       
         <View style={{width:pk.w,height:pk.h*.25,
                alignItems:'center',
                justifyContent:'center'
                }}>
           <Image source={require('../images/park.png')} 
            style={{width:100,height:100}} 
           />
           </View>

           <View style={{width:pk.w,height:pk.h*.03,backgroundColor:'#F2F3F4'}}>

           </View>
            <View style={{alignItems:'center',padding:20}}>

            <Text style={{color:'white',marginTop:20,lineHeight:30,fontSize:18,letterSpacing:1}}>
            深圳市利安建实业有限公司成立于2018年01月12日，注册地位于深圳市宝安区西乡街道流塘社区新安四路198宝立方珠宝城B座L8-01-A18，法人代表为朱银柱。经营范围包括投资兴办实业（具体项目另行申报）；五金制品、塑料、通讯配件、电子元器件、家用电器、电子产品、电脑周边配件的技术开发及销售，国内贸易，货物及技术进出口。（法律、行政法规、国务院决定禁止的项目除外，限制的项目须取得许可后方可经营
            </Text>
            </View>

           </ScrollView>
        </SafeAreaView>
        )
    }
}

export default About

const styles=StyleSheet.create({
    a:{
        width:pk.w*.9,height:pk.h*.08,
        backgroundColor:'#2C3E50',marginTop:50,borderRadius:6,
        alignItems:'center',justifyContent:'center'
    }
})