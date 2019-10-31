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
import Icon from 'react-native-vector-icons/FontAwesome';

 class Show extends Component{
    webview = null;
     constructor(props){
         super(props)
         this.state={
           
         }
         this.icon=[
             {
              name:'arrow-left'   
             },

             {
                name:'rotate-right'   
            },

            {
                name:'home'   
            },
            {
                name:'mobile'   
            },
               {
                name:'arrow-right'   
               },
         ]
          
     }
    
     handleWebViewNavigationStateChange=(e)=>{
         console.log('ee',e)
       if(e==0){
        // this.webView.reload()

        const newURL = 'https://facebook.github.io/react-native/';
    //   const redirectTo = 'window.location = "' + newURL + '"'
    //    aa='window.history.forward()'
        this.webview.injectJavaScript('window.history.back()')
        // window.history.forward()
       }
       if(e==1){
        this.webview.injectJavaScript('location.reload();')
       }
       if(e==2){
        let wb_url=this.props.navigation.getParam('wb_url')
        const redirectTo = 'window.location = "' + wb_url + '"'
        this.webview.injectJavaScript(redirectTo)
       }
       if(e==3){
          console.log(aaaa)
       }
       if(e==4){
        this.webview.injectJavaScript('history.forward()')
       }
     }    
     render(){
         let wb_url=this.props.navigation.getParam('wb_url')
         let color=this.props.navigation.getParam('color')
         console.log('wb_url11:',wb_url,'color:',color)
         return(
             <SafeAreaView style={{flex:1}}>
                 <View style={{
                 width:'100%',height:yangs.hg*.8
             }}>
             <WebView source={{uri:wb_url}} 
             ref={ref => (this.webview = ref)}
              onNavigationStateChange={this.handleWebViewNavigationStateChange}
             />  
             </View>

           {
               color==1?
               <View style={{marginTop:15,flexDirection:'row',justifyContent:'space-between'}}>

                   {
                       this.icon.map((i,k)=>{
                      return     <Button
                      onPress={()=>{
                       this.handleWebViewNavigationStateChange(k)
                      }}
                      type={''}
                icon={
             <Icon
               name={i.name}
               color={'#0099ff'}
                size={25}
          //   color=""
               />
                }
            containerStyle={{width:50}}
      
         />
                       })
                   }

               </View>
               :
               null
           }
             </SafeAreaView>
         )
     }

 }
 export default Show 