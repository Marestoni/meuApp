import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList, ActivityIndicator } from 'react-native';
import firebase from './src/firebaseConnection';





//desabilitar avivo yellowbox
console.disableYellowBox=true;

export default function meuApp() {

  //constante useState/varivel de estado
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  
  
  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((value)=>{
        
        firebase.database().ref('usuario').child(value.user.uid).set({
          nome:nome
        })
        alert('Usuario criado')
        setEmail('')
        setNome('')
        setPassword('')
    })
    .catch((error)=>{
      alert('algo deu errado')
    })
  }
 return (
   <View style={styles.container}>
     <TextInput
      style = {styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setNome(texto)}
      value={nome}
      placeholder= "Nome"
     />
     <TextInput
      style = {styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setEmail(texto)}
      value={email}
      placeholder= "Email"
     />
    
     <TextInput
      style = {styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setPassword(texto)}
      value={password}
      placeholder= "Senha"
     />
     
     <Button 
      title="Cadastrar"
      onPress={cadastrar}
     />
          
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10
  },
  texto:{
    fontSize:20,
  },
  input:{
    marginBottom:10,
    padding:10,
    borderWidth:1,
    borderColor:'#121212',
    height:40,
    fontSize:17
  }
});