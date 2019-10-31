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
    SafeAreaView
} from 'react-native'
import {observer,inject} from 'mobx-react';
import {yangs} from '../yangshi'
import {NavigationActions} from 'react-navigation'
import { Input ,Button} from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast'
@inject('allData')
@observer
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
             date:"",
             date2:"",
        }
    }
    dottoday=()=>{
        const date = new Date();
        
        const fyear = date.getFullYear().toString();
        const fmonth = (date.getMonth()+1).toString();
        const fday = date.getDate().toString();
        const aaafinal=fyear+'-'+fmonth+'-'+fday
        this.setState({date:aaafinal,date2:aaafinal})
      } 

      fetchLatestData() {
        this.setState({
          refreshing: true
        });
        this.fetchData(0).then(movieList => {
          this.setState({
            movieList,
            hasMore: movieList.length != 0,
            refreshing: false
          });
        });
      }

      fetchMoreData() {
        this.fetchData(this.lastOneId).then(newMovieList => {
          let movieList = this.state.movieList.concat(newMovieList);//push只能传元素.concat才能传数组
          this.setState({
            movieList,
            hasMore: newMovieList.length != 0
          });
        });
      }

      fetchData(id) {
        return getMovieList(id).then(movieList => movieList.filter(movie => !!movie.cover)).then(movieList => {
          if (movieList && movieList.length > 0) {
            this.lastOneId = movieList[movieList.length - 1].id;//记录下来
          } else {
            this.lastOneId = -1;
          }
          return movieList;
        });
      }

      onPress(movieData) {
        getNavigator().push({
          name: 'MovieDetailPage',
          simpleMovieData: movieData
        });
      }
      renderSeparator(sectionID, rowID) {
        return (
          <View key={rowID} style={styles.separatorView}/>
        );
      }

     componentDidMount(){
         this.dottoday()
        
      }
      componentWillMount(){
        AsyncStorage.getItem('qqq').then(res=>{
          // console.log('sds',res)
         if(res==null) {
          this.props.navigation.reset([NavigationActions.navigate({ routeName: 'LLogin' })], 0)
         }
              
        }
        ).catch(err=>{
          console.log('weeer',err)

        })
      }

  ttt=()=>{
      if(this.state.nm==undefined){

          return this.refs.toast.show('Please enter the name',1000)

      }else if(this.state.ph==undefined){

          return this.refs.toast.show('Please enter the phone',1000)
      }else if(this.state.ad==undefined){
       return  this.refs.toast.show('Please enter the address',1000)
      }else if(this.state.com==undefined){
         return this.refs.toast.show('Please enter the company',1000) 
      }

  
    fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/psuhdata',
    {method:'POST'})
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})

      let hjh={
         nm:this.state.nm,
         ph:this.state.ph,
         ad:this.state.ad,
         com:this.state.com,
         start:this.state.date,
         end:this.state.date2
      }
      this.props.allData.save_home_list(hjh)
      this.props.navigation.navigate('OrderList')
    
      

  }

  render(){
      console.log('qwq',this.props.allData.text)
       return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{flex:1,width:'100%',alignItems:'center'}}>
         
         <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>

         <Input label={'name'} containerStyle={{marginTop:20}} 
             labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter name'}
           onChangeText={(nm)=>{
            this.setState({nm})
           }}
         />
         <Input label={'phone'} containerStyle={{marginTop:20}} 
         labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter phone'}
           onChangeText={(ph)=>{
            this.setState({ph})
           }}
         />
          <Input label={'address'} containerStyle={{marginTop:20}} 
          labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter address'}
           onChangeText={(ad)=>{
             this.setState({ad})
           }}
         />
          <Input label={'company'} containerStyle={{marginTop:20}} 
          labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter name'}
           onChangeText={(com)=>{
               this.setState({com})
           }}
         />
          <View style={{marginTop:20,marginLeft:10,width:yangs.wd*.95}}>
            <Text style={{fontSize:yangs.wd*.05 ,fontWeight:'500',color:yangs.themeColor,}}>start Time</Text>
            <DatePicker
        style={{width: 200,marginLeft:'20%'}}
        date={this.state.date}
        mode="date"
        showIcon={false}
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date}
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
          </View>

          <View style={{marginTop:20,marginLeft:10,borderBottomColor:yangs.themehui2,
          borderBottomWidth:1,width:yangs.wd*.95
          }}>
            <Text style={{fontSize:yangs.wd*.05 ,fontWeight:'500',color:yangs.themeColor,}}>end Time</Text>
            <DatePicker
        style={{width: 200,marginLeft:'20%',marginBottom:10}}
        date={this.state.date2}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date2}
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date2: date})}}
      />
          </View>
          <Input label={'note'} containerStyle={{marginTop:20}} 
           placeholder={'optional'}
         />
         <Button  title={'submit'} buttonStyle={{
              width:yangs.wd*.95,marginTop:20,bottom:10
          }} onPress={()=>{this.ttt()}}/>
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
export default Home

const styles=StyleSheet.create({
 
     

})