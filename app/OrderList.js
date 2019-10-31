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
import { Input ,Button,Divider} from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast'
@inject('allData')
@observer
class OrderList extends Component{
    constructor(props){
        super(props)
        this.state={
             date:"",
             data2:"",
        }
    }
   

     componentDidMount(){
       fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/listddda')
       .then(res=>res.json())
       .then(res=>{}).catch(ww=>{})
      }

  

  render(){
      console.log('qwq',this.props.allData.text)
       return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{flex:1,width:'100%',alignItems:'center',backgroundColor:yangs.themehui}}>
            <ScrollView>
              {
                  this.props.allData.List.reverse().map((i,m)=>{
                    return(
                        <View style={styles.item_div}
                          key={m}
                        >
                            <View style={{flexDirection:'row',marginLeft:'2.5%'}}>
                             <Text style={styles.fz}>name : </Text>
                             <Text style={styles.fz}>{i.nm}</Text>
                            </View>
            
                        <Divider style={styles.xian}/>  
                        
                        <View style={{flexDirection:'row',marginLeft:'2.5%',}}>
                             <Text style={styles.fz}>phone : </Text>
                             <Text style={styles.fz}>{i.ph}</Text>
                            </View>
                        <Divider style={styles.xian}/>
                        <View style={{flexDirection:'row',marginLeft:'2.5%'}}>
                             <Text style={styles.fz}>address : </Text>
                             <Text style={styles.fz}>{i.ad}</Text>
                         </View>
                        <Divider style={styles.xian}/>   
                        <View style={{flexDirection:'row',marginLeft:'2.5%'}}>
                             <Text style={styles.fz}>company : </Text>
                             <Text style={styles.fz}>{i.com}</Text>
                            </View>
                        <Divider style={styles.xian}/>  
                        <View style={{flexDirection:'row',marginLeft:'2.5%'}}>
                             <Text style={styles.fz}>start-time : </Text>
                             <Text style={styles.fz}>{i.start}</Text>
                            </View>
                        <Divider style={styles.xian}/>  
                        <View style={{flexDirection:'row',marginLeft:'2.5%'}}>
                             <Text style={styles.fz}>end-time : </Text>
                             <Text style={styles.fz}>{i.end}</Text>
                            </View>
                        <Divider style={styles.xian}/>                                               

                        </View>
                    )
                  })
              }
              </ScrollView>

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
export default OrderList

const styles=StyleSheet.create({
    fz:{fontSize:yangs.wd*.05,color:yangs.themeColor},
     item_div:{
        width:yangs.wd*.9,
        // height:yangs.hg*.2,
        padding:10,
        backgroundColor:'white',
        marginTop:10,
        borderRadius:8
    },
  xian:{
    width:'95%',
    height:1,
    marginLeft:'2.5%',
    marginTop:10,
    backgroundColor:yangs.themehui2
  },

     

})