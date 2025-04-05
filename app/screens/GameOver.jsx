import { View,Text, Image, StyleSheet } from "react-native";
import Tittle from '../components/Tittle';
import Mybutton from "../components/Mybutton";
import Colors from "../constants/color";




function GameOver({StartGameHandler,roundomNumber,userNumber}) {

    

   return (
    <View style={styles.rootContainer}>
        <Tittle>Game Over</Tittle>
        <View style={styles.imageContainer}>
           <Image
           style={styles.image} 
           source={{uri: "https://img.freepik.com/free-photo/funny-monkey-with-clothes-studio_23-2150844083.jpg"}}
           />
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.textX}>{roundomNumber}</Text>  rounds to guess the number <Text style={styles.textX}>{userNumber}</Text> </Text>
        <View style={styles.buttonStyle}>
        <Mybutton onPress={StartGameHandler}>Start New Game</Mybutton> 
        </View>
        
    </View>
   ); 
}

export default GameOver;

const styles = StyleSheet.create({
        rootContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
        },
        image: {
            width: '100%',
            height: '100%',
            
            
        },
        imageContainer: {
            width: 300,
            height: 300,
            borderRadius: 150,
            borderWidth: 3,
            borderColor: Colors.primary500,
            margin: 36,
            overflow: 'hidden'
            
        },
        textX: {
            color: Colors.primary700,
            fontSize: 24,
            fontWeight: 'bold'
        },
        summaryText: {
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 24     
        },
        buttonStyle: {
            backgroundColor: Colors.primary600,
            margin: 4,
            borderRadius: 20,  
        }
})