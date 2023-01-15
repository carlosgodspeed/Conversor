import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Conversor from './src/Conversor';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL" />
        <Text style={styles.textoV}>Converta os Valores</Text>
        <Conversor moedaA="EUR" moedaB="BRL" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoV:{
    fontSize:30,
    color:'black',
    marginTop:20
  }
});

export default App;