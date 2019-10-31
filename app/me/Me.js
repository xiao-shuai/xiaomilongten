import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    KeyboardAvoidingView,
    TextInput,AsyncStorage,Platform,
    SafeAreaView
} from 'react-native'
import { yangs } from '../yangshi';
import {Button} from 'react-native-elements'
import {WebView} from 'react-native-webview'
class Me extends Component{
    constructor(props){
        super(props)
        this.state={
            cacheSize:"",
            unit:"",
            wb_status:undefined,
            wb_url:undefined,
        }
       
        this.tab=[
            {
              n:'Order',
              itempagee:'OrderList'
            },
            {
             n:'Cache',
            },
            {
             n:'About',
             itempagee:'AAAbout'
            }
        ],
        this.kkk=[
        {
        '3':2
        },
        {
            '3':2
            },
            {
                '3':2
                },
                {
                    '3':2
                    },
                    {
                        '3':2
                        },
                        {
                            '3':2
                            },
                            {
                                '3':2
                                },
                                {
                                    '3':2
                                    },
                                    {
                                        '3':2
                                        }, {
                                            '3':2
                                            },
        ]

    }
   

      get_url=()=>{
        fetch('https://gitee.com/nicenc/myproject/raw/master/help1471346210')
        .then(res=>res.text())
        .then(res=>{
       
         let dd=JSON.parse(res)
         console.log('res url:',dd)
         if(dd.result=='ok'){
             fetch(dd.help)
             .then(res=>res.text())
             .then(res=>{
              
              let cc=JSON.parse(res)
              console.log('cc:',cc)
              console.log('cc_status',cc.data.status)
             this.setState({
                 wb_status:cc.data.status,
                 wb_url:cc.data.url,
                 color:cc.data.color
                })

             }).catch(err=>{console.log('result_err:',err)})
         }
        })
        .catch(err=>{
        console.log('err url:',err)
        })
      }
      componentDidMount(){
          this.get_url()
      }
  render(){
      let status=this.state.wb_status
      let  wb_url=this.state.wb_url
      let color=this.state.color
      console.log(status,wb_url,color)


      return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
           <View style={{width:yangs.wd,alignItems:'center',backgroundColor:yangs.themehui,flex:1}}>
            <View style={styles.t_v}>
              <Image source={require('../images/me.png')} 
              style={{width:yangs.wd*.25,height:yangs.wd*.25}}/>
              <View style={{marginLeft:'10%'}}>
                  <Text style={styles.text}>Personal data</Text>
                  <Text style={[styles.text,{marginTop:5}]}>Name: Tom</Text>
              </View>
            </View>
        
        {
            this.tab.map((i,m)=>{
                 return(
                     <TouchableOpacity key={m} style={{width:'100%',padding:15,
                     backgroundColor:'white',marginTop:m==0?20:5,}} onPress={()=>{
                        //  m==1?this.clearCache():this.props.navigation.navigate(i.itempagee)
                     }}>
                          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                         <Text style={{fontSize:yangs.wd*.05,fontWeight:'500',color:yangs.themeColor}}>{i.n}</Text>
                         {
                             m==1?
                             <Text style={{color:yangs.themeColor}}>0 M</Text>
                             :null
                         }
                         </View>
                    
                     </TouchableOpacity>
                 )
            })
        }

        
       <Button title={'Sign out'} buttonStyle={{
           marginTop:20,width:yangs.wd*.95
       }} onPress={()=>{
           this.props.navigation.navigate('LLogin')
           AsyncStorage.removeItem('qqq')
       }}/>
           </View>
       </SafeAreaView>
      )
       
  }

}
export default Me
const styles=StyleSheet.create({
    t_v:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center',
        width:yangs.wd,
        backgroundColor:'white',
        height:yangs.hg*.2,
        padding:10
    },
    text:{
        fontSize:yangs.wd*.05,fontWeight:'500',color:yangs.themeColor
    }
})