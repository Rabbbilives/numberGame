import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../constants/color';


function Mybutton({children, onPress}) {
    return (
        <View style={styles.Container}>
           <Pressable android_ripple={{color: Colors.primary500,}} 
           style= {styles.PressableStyle}
           onPress={onPress}
           >
               <Text style={styles.textStyle}>{children}</Text>
            </Pressable> 
        </View>
    );
}


export default Mybutton;



const styles = StyleSheet.create({
  PressableStyle: {
   padding: 10
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  Container: {
    margin: 4,
    overflow: 'hidden',
    borderRadius: 20,
  }
})