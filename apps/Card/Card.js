import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card({cases, todayCases, deaths, todayDeaths, active, recovered}) {
    return (
        <View style={style.card}>

            <View style={[style.cardInfo, style.saveArea, style.shadowProp]}>
                <Text style={style.numberCard}>{recovered}</Text>
                <Text style={style.titleCard}>recovered</Text>
            </View>

            <View style={[style.cardInfo, style.shadowProp]}>
                <Text style={style.numberCard}>{todayCases}</Text>
                <Text style={style.titleCard}>todayCases</Text>
            </View>

            <View style={[style.cardInfo, style.shadowProp]}>
                <Text style={style.numberCard}>{active}</Text>
                <Text style={style.titleCard}>active</Text>
            </View>

            <View style={[style.cardInfo, style.shadowProp]}>
                <Text style={style.numberCard}>{deaths}</Text>
                <Text style={style.titleCard}>deaths</Text>
            </View>

            <View style={[style.cardInfo, style.shadowProp]}>
                <Text style={style.numberCard}>{todayDeaths}</Text>
                <Text style={style.titleCard}>todayDeaths</Text>
            </View>
            
            <View style={[style.cardInfo, style.shadowProp]}>
                <Text style={style.numberCard}>{cases}</Text>
                <Text style={style.titleCard}>casedfs</Text>
            </View>
        </View>
    )
    
}
const style = StyleSheet.create({
    card:{
       flex: 1,
       flexDirection:'row',
       flexWrap:'wrap',
       paddingTop:10,
       justifyContent:'space-evenly',
             
    },
    cardInfo:{
        backgroundColor:'#FF0075',
        padding:10,
        width:'40%',
        height:'30%',
        margin:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',  
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    numberCard:{
        color:'#fff',
        fontSize:22,
        paddingBottom:7,
    },
    saveArea:{
        backgroundColor:'#77D970',
    },
    titleCard:{
        fontSize:15,
        textTransform:'uppercase',
        color:'#fff',
    },

})