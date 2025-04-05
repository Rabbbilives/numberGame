import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/color';


function GenerateRandomNumber({children, }) {

    return (
        <View style ={styles.Container}> 
          <Text style={styles.TextStlye}>
             {children}
          </Text>
        </View>
    );

}

export default GenerateRandomNumber;

const styles = StyleSheet.create({
   Container: {
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: Colors.primary600,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
   }, 
   TextStlye: {
    color: Colors.primary800,
    textAlign: 'center',
    padding: 10,
    fontSize: 30
   },
})