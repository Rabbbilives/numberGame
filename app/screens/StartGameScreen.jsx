import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import Mybutton from '../components/Mybutton';
import Colors from '../constants/color';
import { useState } from 'react';
import Tittle from '../components/Tittle';

function StartGameScreen({pickNumber}) {
  
    const [inputNumber, setinputNumber] = useState('')
    
    const enterNumberHandler = enterNumber => {
        setinputNumber(enterNumber)
    }

    const resetNumberHandler = () => {
        setinputNumber('')
    }

    

    const submitNumberHandler = () => {
        
        chosenNumber = parseInt(inputNumber)

        if (isNaN(chosenNumber)  || chosenNumber < 0 || chosenNumber > 99) {
          Alert.alert("Oppos!", "number must be between 1 and 99", [{
            text: 'Okay', style: 'default', onPress: resetNumberHandler
          }])
        }else {
            pickNumber(chosenNumber)
        }
      
    }

   return (
    <View style= {styles.container}>
        <Tittle>Guess My Number</Tittle>
       <View style={styles.InputTextContainer}>
        <Text style={styles.InputTextStyle}>Enter a Number</Text>
        <TextInput 
        keyboardType="numeric" 
        maxLength={2} 
        style={styles.InputStyle}
        onChangeText={enterNumberHandler}
        value={inputNumber}
        />
        <View style={styles.line}/>

        <View style={styles.ButtonContainer}>
            <View style={styles.buttonStyle}>
            <Mybutton onPress={resetNumberHandler}>Reset</Mybutton>
            </View>
            <View style={styles.buttonStyle}>
            <Mybutton onPress={submitNumberHandler}>Confirm</Mybutton>
            </View>  
        </View>
        
       </View>
    </View>
   ); 
}



export default StartGameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    InputTextContainer: {
        backgroundColor: Colors.primary700,
        borderWidth: 2,
        borderColor: Colors.primary700,
        marginTop: '30%', 
        borderRadius: 40,
        padding: 16

    }, 
    InputTextStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.primary800,
        
    },
    InputStyle: {
        textAlign: 'center',
        fontSize: 29,
        color: Colors.primary800,
        paddingTop: 10
    },
    line: {
        height: 1,
        backgroundColor: Colors.primary800,
        width: '15%',
        marginVertical: 10,
        marginLeft: "42.5%"
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
         
    },
    buttonStyle: {
        backgroundColor: Colors.primary600,
        margin: 4,
        flex: 1,
        borderRadius: 20,  
    }
})