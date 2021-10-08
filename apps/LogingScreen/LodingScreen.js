import React from 'react';
import { Image, StyleSheet, View } from "react-native";

function LodingScreen() {
    return (
        <View style={style.content}>
            <Image
                style={style.imageDesign}
                source={require('../../assets/Eclipse-1s-200px.gif')}
            />
        </View>
    )
}

const style = StyleSheet.create({
    imageDesign:{
        width: 50,
        height: 50,
    },
    content:{
        backgroundColor:'#F1F2F3',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default LodingScreen
