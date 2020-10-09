import React,{useState} from 'react'
import {TextInput,Text,View,StyleSheet,TouchableOpacity,Alert} from "react-native";
import {ButtonColor, MainColor} from "../theme";

export const MainScreen = () => {
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)

    const onPressHandler = () =>{
        if(email.length == 0||password.length == 0)
            Alert.alert('Все поля должны быть заполнены')
        else
            Alert.alert('Ваш почта '+email + '\nВаш пароль '+password)
    }

    return(
        <View style={styles.container}>
            <View style={styles.panel}>
                <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder='Email'/>
                <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder='Пароль'/>
                <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                    <Text style={styles.buttonText}>Сохранить</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:MainColor
    },
    panel:{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20
    },
    input:{
        marginTop: 10,
        fontSize:20,
        borderBottomWidth:1
    },
    button:{
        borderWidth:1,
        borderColor:ButtonColor,
        borderRadius:5,
        marginTop: 10,
        backgroundColor:ButtonColor,
        padding:5
    },
    buttonText:{
        fontSize: 20,
        color:'white'
    }
})
