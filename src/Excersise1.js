import React from "react";
import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
const Excersise1 =()=>
{
    const onPress =()=>
    {
        Alert.alert("Hello")
    }

    return(
        <View style={myStyle.container}>
          <TouchableOpacity style={myStyle.button}
            onPress={onPress}
           >
            <Text style={myStyle.textButon}>
                Press me
            </Text>
        </TouchableOpacity>
        </View>
    )
}

export default Excersise1;
const myStyle = StyleSheet.create({
    container:{
        flex:1
    },
    Button:{
        alignItems:"center"
    },
})