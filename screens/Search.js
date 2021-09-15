import React,{useState} from 'react';
import { TextInput,Button,Card} from 'react-native-paper';
import {View,Text,FlatList} from 'react-native'
import Header from './Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
import IonIcon from 'react-native-vector-icons/Ionicons'

export default Search =({navigation})=> {
    const [city,setCity] = useState('')
    const [cities,setCities] = useState([])
    const fetchCities = (text)=>{
        setCity(text)
        //fetch("https://www.autocomplete.wunderground.com/aq?query="+text)
        //fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&types=(cities)&language=pt_BR&key=AIzaSyBO57ssM6J2C4kC3WlZb_S9t7GqVHRxL3g`)
        //.then(item=>item.json())
        //.then(cityData=>{
            //console.log(cityData)
            //setCities(cityData.RESULTS.slice(0,9))
        //})
    }
    const btnClick = async ()=>{
        await AsyncStorage.setItem("newcity",city)
        navigation.navigate("Home",{city:city})
    }
    const listClick = async (cityname)=>{
        setCity(cityname)
        await AsyncStorage.setItem("newcity",cityname)
        navigation.navigate("Home",{city:cityname})
    }
    return (
     <View style={{flex:1}}>
         <Header name="Search Screen" />
          <TextInput
           label="city name"
           theme={{colors:{primary:"#00aaff"}}}
           value={city}
           onChangeText={(text)=>fetchCities(text)}
          />
          <Button
           icon="content-save"
           mode="contained" 
           theme={{colors:{primary:"#00aaff"}}}
           style={{margin:20}}
           onPress={() => btnClick()}>
          <Text style={{color:"white"}}>save changes</Text> 

        </Button>
        <FlatList
        data={cities}
        renderItem={({item})=>{
            return(
                <Card 
                 style={{margin:2,padding:12}}
                 onPress={()=>listClick(item.name)}
                >
                    <Text>{item.name}</Text>
                </Card>
            )
        }}
        keyExtractor={item=>item.name}
        />

     </View>
    );
 
}