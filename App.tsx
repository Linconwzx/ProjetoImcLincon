import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import { useState} from 'react';

export default function App() {

  const[peso, setPeso] = useState('');
  const[altura, setAltura] = useState('');
  const[resultado, setResultado] = useState('');

  

  function calcularImc(){
    let alturaEmMetro = parseFloat(altura) / 100;
    let result = parseFloat(peso) / (alturaEmMetro * alturaEmMetro); 
    

    let msg ="";
  if(result < 18.5){
    msg = " - Abaixo do Peso"
  } else if (result >= 18.5 && result <= 24.99){
    msg = " - Peso Ideal: "
  }
  if(result >= 25 && result <= 29.99){
    msg = " - Levemente acima do peso"
  } else if (result >= 30 && result <= 34.99){
    msg= " - Obesidade grau I"
  }
  if(result >= 35 && result <= 39.99){
    msg=" - Obesidade grau II (severa)"
  }else if (result > 40){
    msg=" - Obesidade grau III (mórbida)"
  }
  setResultado ("Valor do IMC: "+result.toFixed(2)+""+msg);

    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IMC</Text>
      <StatusBar style="auto" />
        <View style={styles.bloco}>
            <Text style={styles.label}>Peso</Text>
              <TextInput 
              style={styles.input}
              keyboardType='numeric'
              value={peso}
              onChangeText={(valor)=> setPeso(valor)}
              />
        </View>
        <View style={styles.bloco}>
            <Text style={styles.label}>Altura</Text>
              <TextInput 
              style={styles.input}
              keyboardType='numeric'
              value={altura}
              onChangeText={(valor)=> setAltura(valor)} 
              />
        </View>

        <View>
            <TouchableOpacity style={styles.btnTxt} onPress={calcularImc}>
              <Text>Calcular</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
              <Text style={styles.aviso}>{resultado}</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#f0f8ff',
    color: 'black',
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
  titulo: {
    color: 'black',
    marginBottom: 80,
    fontSize: 20,
   
  },
  bloco: {

  },
  btnTxt: {
    marginTop:  30,
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  label: {
    paddingBottom:10,
    paddingTop: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  aviso:{
    marginTop: 30,
    backgroundColor: 'black',
    color:'white',
    width: 300,
    height: 50,
    borderRadius: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  }


});
