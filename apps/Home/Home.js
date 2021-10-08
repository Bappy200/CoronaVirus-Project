import React, { useEffect, useState } from 'react';
import { Alert, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../Card/Card';
import LodingScreen from '../LogingScreen/LodingScreen';



function Home() {
    const [coronaData, setCoronaData] = useState([]);
    const [isLoding, setIsLoding] = useState(true);
    const [globalData, setGlobalData] = useState({})
    useEffect(()=>{
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then(res => res.json())
        .then(data => {
            setCoronaData(data)
            setGlobalData(data[0])
            setIsLoding(false)
        })
    },[]);


    
    
    
    return (         
            <SafeAreaView style={style.container}>

            {isLoding ? <LodingScreen/> : ( <>
                <View style={style.topContainer}>

             
                <View style={style.topIcons}>
                    <Icon 
                        name="bars"
                        size={25}
                        style={style.barsButton}
                        onPress={()=> Alert.alert('Corona info','navbar is comming')}
                    />
                    
                    <Icon 
                        name="bell"
                        size={25}
                        style={style.barsButton}
                        onPress={()=> Alert.alert('Corona info','notification is comming')}
                    />
                </View>

                <View style={style.golbalTitle}>
                    <View style={style.topHalf}>
                        <Text style={style.titleText}>Golbal Case</Text>
                        <Text style={style.globalCase}>{globalData.cases}</Text>
                    </View>
                    <View style={[style.topHalf, style.recivedState]}>
                        <Image style={style.imageCorona} source={require('../../assets/coronavirus-2.png')} />                        
                    </View>
                </View>
                </View>

            
                <View style={style.golbal}>
                    
                    <View style={style.cards}>
                        <Card {...globalData}/>
                    </View>
                </View>
            </>
            )}
            

        </SafeAreaView>
        
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    cards:{
        flex:1,
        justifyContent:'space-evenly',
    },
    barsButton:{
        width:25,
        color:'#ffff',
    },
    globalCase:{
        fontSize:25,
        color:'red',
        fontWeight:'600',
    },
    imageCorona:{
        width:50,
        height:50,
        
    },
    recivedState:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    recived:{
        fontSize: 30,
        fontWeight:'300',
        color:'#fff'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    topIcons:{
        justifyContent:'space-between',
        flexDirection:'row',
        padding:15,
    },
    topContainer:{
        flex:1,
        backgroundColor:'#172774',
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
    },
    titleText:{
        fontSize:25,
        fontWeight:'500',
        color:'#ffff'
    },
    topHalf:{
        width:'50%',
        height:'100%',
    },
    golbal:{
        flex:3,
        
    },
    golbalTitle:{
        flex:1,
        flexDirection:'row',
        padding:15,
    }
})

export default Home
