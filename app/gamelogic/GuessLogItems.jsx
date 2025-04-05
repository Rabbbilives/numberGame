import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/color';

function GuessLogItem({roundomNumber, guess}) {

   
   return(
     <View style={styles.ListItem}>
        <Text style={styles.teststyle}>#{roundomNumber}</Text>
        <Text style={styles.teststyle}>Opponent's Guess: {guess}</Text>
     </View>
   ); 
}


export default GuessLogItem;


const styles = StyleSheet.create({
   ListItem: {
       borderColor: Colors.primary800,
       borderWidth: 2,
       borderRadius: 40,
       padding: 12,
       paddingRight: 32,
       marginVertical: 8,
       backgroundColor: Colors.primary700,
       flexDirection: 'row',
       justifyContent: 'space-between',
       width: '100',
       elevation: 5,
   },
   teststyle: {
       fontWeight: 'bold',
       fontSize: 20,
       color: 'white'
   },
})