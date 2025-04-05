import { View, Text, StyleSheet, Alert, FlatList, SafeAreaView } from "react-native";
import Colors from "../constants/color";
import Tittle from "../components/Tittle";
import GenerateRandomNumber from '../gamelogic/GenerateRandomNumber'
import { useRef, useState } from "react";
import Mybutton from "../components/Mybutton";
import GuessLogicItem from '../gamelogic/GuessLogItems'




const GenerateRandomNumberHandler = (min, max, excluded, onExcluded) => {
  const randomFormula = Math.floor(Math.random() * (max - min)) + min;

  if (randomFormula === excluded) {
    onExcluded();
  } else {
    return randomFormula;
  }
};


function SecondGameScreen({userNumber, GameOverHandler, onGuessRoundsUpdate}) {
  const initailGuess = GenerateRandomNumberHandler(1, 100, userNumber, GameOverHandler);  
  const [randomGuess, setRandomGuess] = useState(initailGuess);
  const [Guess, setGuess] = useState([initailGuess]);
  const currentMin = useRef(1);
  const currentMax = useRef(100);

 
  const guessNumberHandler = (direction) => {

    if ((direction === 'lower' && randomGuess < userNumber ) || 
    (direction === 'greater' && randomGuess > userNumber ))  {
      Alert.alert("Wrong Info", 'The Information is not correct ', [{text: 'Sorry', style: 'default'}]);
    } 
      
  

    if (direction === 'lower') {
      currentMax.current = randomGuess;
    } else {
      currentMin.current = randomGuess + 1;
    }

    const newRandomGuess = GenerateRandomNumberHandler(currentMin.current, currentMax.current, userNumber, GameOverHandler);
    setRandomGuess(newRandomGuess);
    setGuess(prevGuessRound => [newRandomGuess, ...prevGuessRound])

    onGuessRoundsUpdate((prevRounds) => prevRounds + 1)
   
  }
  
  const GuessRoundLenght = Guess.length 
  

    return(
      <View style={styles.container}>
        <Tittle> Opponent's Guess </Tittle>
        <GenerateRandomNumber>{randomGuess}</GenerateRandomNumber>
        
        <View style={styles.InputTextContainer}>
        <Text style={styles.InputTextStyle}>Higher or Lower</Text>
 
         <View style={styles.ButtonContainer}>
            <View style={styles.buttonStyle}>
            <Mybutton onPress={guessNumberHandler.bind(this, 'greater')}>+</Mybutton>
            </View>
            <View style={styles.buttonStyle}>
            <Mybutton onPress={guessNumberHandler.bind(this, 'lower')}>-</Mybutton>
            </View>  
          </View> 
        </View>
        <SafeAreaView style= {styles.flatlistContainer}> 
          <FlatList
           data={Guess}
           renderItem={(itemDATA) => <GuessLogicItem roundomNumber={itemDATA.index + 1} guess={itemDATA.item} />}
           keyExtractor={(item) => item.toString()}
          />  
          </SafeAreaView> 
      </View>
    );
}


export default SecondGameScreen;

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
ButtonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
   
},
buttonStyle: {
  backgroundColor: Colors.primary600,
  margin: 4,
  flex: 1,
  borderRadius: 20,  
},
InputTextStyle: {
  textAlign: 'center',
  fontSize: 30,
  fontWeight: 'bold',
  color: Colors.primary800,
  
},
flatlistContainer: {
  flex: 1,
  width: '100%',
},
});