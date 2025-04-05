import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/color';

function Tittle({children}) {
    return (
      <View style={Styles.container}>
        <Text style={Styles.textStyle}>{children}</Text>
      </View>
    );
}



export default Tittle;

const Styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.primary800, 
        padding: 10,

    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.primary800,
        textAlign: 'center'


    },
})