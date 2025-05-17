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
    msg = " - (Abaixo do Peso)"
  } else if (result >= 18.5 && result <= 24.99){
    msg = " - (Peso Ideal) "
  }
  if(result >= 25 && result <= 29.99){
    msg = " - Levemente acima do peso"
  } else if (result >= 30 && result <= 34.99){
    msg= " - (Obesidade grau I)"
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
            <Text style={styles.label}>Peso:</Text>
              <TextInput 
              style={styles.input}
              keyboardType='numeric'
              value={peso}
              onChangeText={(valor)=> setPeso(valor)}
              />
        </View>
        <View style={styles.bloco}>
            <Text style={styles.label}>Altura:</Text>
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
              <Text style={styles.valor}>{resultado}</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    color: 'black',
    width: 250,
    height: 50,
    borderWidth: 1.5,
    borderRadius: 25,
    paddingLeft: 20,
    fontSize: 15
  },
  titulo: {
    color: 'black',
    marginBottom:50,
    fontSize: 30,
   
  },
  bloco: {

  },
  btnTxt: {
    marginTop:  30,
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
    width: 180,
    height: 50,
    borderWidth: 1.5,
    borderRadius: 25,
    justifyContent: 'center',
    
  },
  label: {
    paddingBottom:13,
    paddingTop: 18,
    color: 'black',
    fontSize: 22,
    paddingLeft: 3,
    width: 70,
  
    
  },
  valor: {
    marginTop: 35,
    fontSize: 20,
    width: 340,
    textAlign: 'center',
  }


});
