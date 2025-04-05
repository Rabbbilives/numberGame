import { ImageBackground, SafeAreaView, StyleSheet,  View } from "react-native";
import StartGameScreen from './screens/StartGameScreen';
import SecondGameScreen from './screens/SecondGameScreen';
import { useState } from "react";
import GameOver from './screens/GameOver'
import {LinearGradient} from "expo-linear-gradient"
import Colors from "./constants/color";


export default function Page() {

const [userNumber, setuserNumber] = useState();

const [isOver, setisOver] = useState(false);

const [guessRounds, setGuessRounds] = useState(0); 

function pickNumberHandler(pickNumber) {
  setuserNumber(pickNumber)
  setisOver(false)
  setGuessRounds(0);
 }

function GameOverHandler() {
  setisOver(true)
  setGuessRounds(guessRounds);
  
}

const StartGameHandler = () => {
  setuserNumber(null);
  setisOver(false);
  setGuessRounds(0)

}





  let screen = <StartGameScreen pickNumber={pickNumberHandler} />
  
  if (userNumber && !isOver) {
    screen = <SecondGameScreen userNumber={userNumber} 
    GameOverHandler={GameOverHandler}
    onGuessRoundsUpdate={setGuessRounds}
    />
  }

  if (isOver && userNumber) {
    screen = <GameOver 
    StartGameHandler={StartGameHandler }  
    roundomNumber={guessRounds} 
    userNumber={userNumber} 
  />
  }



  return (

   <LinearGradient colors={[Colors.primary700, Colors.primary800]} style={styles.container} >
        <ImageBackground 
    style={styles.container}
    resizeMode="cover"
    imageStyle = {styles.backGround}

      source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkeil71EivuM2p203UvpqQJP3dBxWYA1OUtqBEe6wC_t10UV6XOq9Fnfo7f9f1iVaPcE&usqp=CAU'}}>
      <SafeAreaView style={styles.container}>
      {screen}
    </SafeAreaView>
    </ImageBackground>
   </LinearGradient>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backGround: {
    opacity: 0.15
  }
});
