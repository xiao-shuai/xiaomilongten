import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView,Alert,Linking,ImageBackground
} from 'react-native'
import {sass} from '../theme/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,SearchBar,Divider} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import {api} from '../interface/interface'
import forge from 'node-forge'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-snap-carousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
@inject(["datambx"])
@observer // 监听当前组件
class Home extends Component{
    static navigationOptions = {
        title: '首页',
      };
    constructor(props){
      super(props)
      this.state={
        entries:[
            {
             img:require('../img/ban1.png')   
            },
            {
                img:require('../img/ban2.png')   
            },
           
        ]
      }
      
    }

 get_skey=()=>{
    let ts=Date.parse(new Date())
    let md = forge.md.md5.create();
    md.update(ts+'tJJ@SMqCPR8VAW4Q');//需要加密的字符串
    console.log('需要加密的字符串',ts+'tJJ@SMqCPR8VAW4Q')
    let end_md=md.digest().toHex()
    console.log('ts!!!',ts,'end_md!!',end_md,'ssss',`${api.skey}?ts=${ts}&sign=${end_md}`)
    let body=JSON.stringify({
      ts:ts,
      sign:end_md
    })
    fetch(`${api.skey}`,{
      method:'POST',
      body:body
    }).then(res=>res.json()).then(res=>{
      console.log('获取sky:',res)
     this.props.datambx.sky(res.skey)
      AsyncStorage.setItem('skey',res.skey)
    //   that._save(res.skey)
    }).catch(err=>{
     console.log('err!!',err)  
    })
 }   

 
    componentWillMount(){
        AsyncStorage.getItem('sass').then(res=>{
              if(res==null){
                this.get_skey()
              }
        }).catch(err=>{

        })
      }

 is_log=()=>{
  AsyncStorage.getItem('sass').then(res=>{
    console.log('sass:',res);
        if(res!==null){
          this.props.datambx.save_login(true)
        }
  }).catch(err=>{

  })
 }
    componentWillMount(){
    //  AsyncStorage.removeItem('skey')
      AsyncStorage.getItem('skey').then(e=>{
        console.log('ee',e)
        this.props.datambx.sky(e)
        if(e==null){
          this.get_skey()
        }else{
           this.is_log()
        }
      }
      ).catch()  

    }


  please_login=()=>{
     Alert.alert('提示','您还未登录哦，请登录！',
     [{'text':'我再逛逛'},{'text':'去登录',onPress:()=>{
       this.props.navigation.navigate('LogEntry')
     }}])
  }  
    render(){
      console.log('login:',this.props.datambx.login)
      const login=this.props.datambx.login
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
               <ImageBackground source={require('../img/jbs1.jpg')} style={styles.t_s_v}>
                 {/* <TouchableOpacity style={{width:'100%',alignItems:'center'}} onPress={()=>{
                   alert(1)
                 }}> */}
               {/* <SearchBar 
               containerStyle={styles.SearchBar}  
                style={{borderWidth:0}}
                inputContainerStyle={{backgroundColor:'white'}}
                inputStyle={{borderWidth:0}}
                editable={false}
                
               /> */}
               {/* </TouchableOpacity> */}
               <View style={styles.top_v}>
               <Button 
               onPress={()=>{
                  login?
                 this.props.navigation.navigate('Search_sj')
                 :
                 this.please_login()
               }}
               title='商机搜索'
               titleStyle={{color:sass.Theme_hui2,marginLeft:20}}
               icon={
               <Ionicons name='ios-search' style={{fontSize:20,color:'#B2BABB'}}
               />} 
               buttonStyle={{backgroundColor:'white',width:sass.sass_w*.8}}/>
               <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate('News2')
               }}>
               <MaterialCommunityIcons name='message-reply-text' style={{color:'white',fontSize:20}}/> 
               </TouchableOpacity>
               </View>

               </ImageBackground>
             {/* <View style={styles.t_s_v}>
               
             </View> */}
             {/* <Divider style={styles.diliv}/> */}
             
             <ScrollView contentContainerStyle={{
                  width:sass.sass_w
                 }}>
                 {/* <Image source={require('../img/lb.jpg')} style={{
                     width:'100%',height:sass.sass_h*.25,marginTop:10
                 }}/> */}
                 <Carousel
                 autoplay={true}
                //  layout={'stack'}
                 layoutCardOffset={`9`}
                 loop={true}
                 firstItem={1}
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={({item,index})=>{
               return(
                <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('Qybb_xq',{info:item})
                }}>
                  <View style={{width:sass.sass_w,marginTop:10}}>
                      <Image source={item.img} resizeMode='stretch' 
                      style={{width:sass.sass_w*.9,
                      height:sass.sass_h*.25}}/>
                  </View>
                  </TouchableOpacity>
               )
              }}
              sliderWidth={sass.sass_w}
              itemWidth={sass.sass_w*.9}
            />
                 
                 <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
                     <View style={styles.item_view}>
                    
                         <TouchableOpacity
                          onPress={() =>login? this.props.navigation.navigate('Market'):this.please_login() }
                         >
                       <ImageBackground source={require('../img/jbs1.jpg')} 
                       style={styles.img_back}>
                          <FontAwesome name='shopping-cart' style={{fontSize:sass.sass_w*.1,color:'white'}}/> 
                         <Text style={styles.img_text}>服务超市</Text>
                       </ImageBackground>
                       </TouchableOpacity>
                       {/*  */}
                       <TouchableOpacity
                        onPress={() =>login? this.props.navigation.navigate('Xc'):this.please_login()}
                       >
                       <ImageBackground source={require('../img/jbs2.jpg')}
                       style={styles.img_back}
                        >
                         <FontAwesome name='bullhorn' style={{fontSize:sass.sass_w*.1,color:'white'}}/> 
                       <Text style={styles.img_text}>企业宣传</Text>
                      </ImageBackground>
                      </TouchableOpacity>
                     </View>

                     <View style={styles.item_view}>
                     {/* <TouchableOpacity>
                     <ImageBackground source={require('../img/jbs3.jpg')} 
                       style={styles.img_back}>
                      <FontAwesome name='exchange' style={{fontSize:sass.sass_w*.1,color:'white'}}/> 
                         <Text style={styles.img_text}>商机分配</Text>
                       </ImageBackground>
                       </TouchableOpacity> */}
                       {/*  */}
                       <TouchableOpacity
                        onPress={() => {
                          login?
                          this.props.navigation.navigate('Data')
                          :
                          this.please_login()
                        }}
                       >
                       <ImageBackground source={require('../img/jbs3.jpg')} style={[styles.img_back,{height:sass.sass_h*.4}]}>
                 
                       <FontAwesome name='table' style={{fontSize:sass.sass_w*.1,color:'white'}}/> 
                       <Text style={styles.img_text}>数据统计</Text>
                       
                      </ImageBackground>
                      </TouchableOpacity>   
                     </View>
                 </View>
                 
             </ScrollView>
           </SafeAreaView>
       )
    }
}
export default Home
const styles=StyleSheet.create({
  top_v:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
    height:'100%',
    alignItems:'center'
  },

    item_view:{
        width:'47%',height:sass.sass_h*.4,justifyContent:'space-between'
    },
    img_text:{
        fontSize:18,fontWeight:'500',color:'white',marginTop:10
    },
    img_back:{
        width:'100%',height:sass.sass_h*.18,alignItems:'center',justifyContent:'center'
    },
    diliv:{
        backgroundColor:sass.Theme_hui,height:10,width:'100%',marginTop:5
    },
    SearchBar:{
     width:'90%',
     backgroundColor:null,  
    
     borderBottomWidth:0,
     borderTopWidth:0,
    },
    t_s_v:{
        width:'100%',
        height:sass.sass_h*.1,
        backgroundColor:sass.Theme,
        alignItems:'center',
        
        
    }
})