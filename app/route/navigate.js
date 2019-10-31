import React,{Component} from 'react'
import { 

     createAppContainer,
      
    } from 'react-navigation';
    import { createBottomTabNavigator} from 'react-navigation-tabs'
    import {createStackNavigator} from 'react-navigation-stack'
 import  Ionicons  from 'react-native-vector-icons/Ionicons' 
 import  {
     Me,
     Home,
     Twoo,
     OrderList
} from  '../index'
 import {yangs} from  '../yangshi'
 import AAAbout from '../AAAbout'
 import LLogin from '../LLogin'
 import Zhuce from '../Zhucc'
import Zhucc from '../Zhucc';
import Show from '../me/Show'
 const llllyyy=createBottomTabNavigator(
    {
        Home:Home,
        Address:Twoo,
        Me:Me,
      },
      {
       initialRouteName: 'Home',
       defaultNavigationOptions:({ navigation })=>({
           tabBarIcon:({focused, horizontal, tintColor})=>{
          
          const { routeName } = navigation.state;
           let iconName;
           if (routeName === 'Home') {
               iconName ='ios-home';
             } else if (routeName === 'Address') {
               iconName = 'ios-business';
             }else{
                 iconName='ios-person'
             }
             return  <Ionicons name={iconName} size={horizontal ? 20 : 25} 
         color={focused?yangs.themeColor:yangs.themehui} />;
        }
       }),
       tabBarOptions: {
          activeTintColor:yangs.themeColor,
          inactiveTintColor:yangs.themehui,
        },
      }
 )

 const aswqRoute =createStackNavigator({
      llllyyy:{
        screen:llllyyy,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
      },
      
      
      AAAbout:{
        screen:AAAbout, 
        navigationOptions:()=>({
            title:'About us'
        })
      },
    //   Login:{
    //     screen:Login,
    //     navigationOptions:()=>({
    //         // title:'About us'
    //         header:null
    //     })
    //   },
    OrderList:{
        screen:OrderList,
        navigationOptions:()=>({
            title:'OrderList'
            
        })
      },
      Zhucc:{
        screen:Zhucc,
        navigationOptions:()=>({
            title:'registered'    
        })
      },
      LLogin:{
        screen:LLogin,
        navigationOptions:()=>({
            // title:'registered'  
            header:null  
        })
      },
      Show:{
        screen:Show,
        navigationOptions:()=>({
            // title:'registered'  
            header:null  
        })
      },


 })

 export default createAppContainer(aswqRoute)