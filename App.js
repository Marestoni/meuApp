import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import firebase from './src/firebaseConnection';



//desabilitar avivo yellowbox
console.disableYellowBox=true;

export default function meuApp() {

  //constante useState/varivel de estado
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');

  

  useEffect(()=>{
    async function Dados(){
        //criar um nó
        //await firebase.database().ref('tipo').set('Cliente');
        //Remover um nó da base
        //await firebase.database().ref('tipo').remove();

        //adicionando mais um filho dentro de um nó
        /*await firebase.database().ref('usuario').child(3).set({
          nome: 'José',
          cargo: 'Programador junior'
        })*/
        //Atulizar um filho
        /*await firebase.database().ref('usuario').child(3).update({
          nome:'Jézin'
        });*/




      /*o .on é o olheiro, ele fica verificando a todo momento a database
      await firebase.database().ref('usuario/1').on('value' , (snapshot) =>{
        setNome(snapshot.val().nome);
        setIdade(snapshot.val().idade);
      });

      //.once atualiza conforme vc atuliza o app, economizando performace
      await firebase.database().ref('nome').once('value', (snapshot) => {
        setNome(snapshot.val());
      });*/
    }

    Dados();

  },[]);

  async function cadastrar(){
    if(nome !== '' & cargo !== ''){
      let usuario = await firebase.database().ref('usuario');
      let chave = (await usuario.push()).key;

      usuario.child(chave).set({
        nome: nome,
        cargo: cargo
      });
      alert('Castro realizado');
    }
  }

 return (
   <View style={styles.container}>
     <Text style={styles.texto}>Nome</Text>
     <TextInput
      style = {styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setNome(texto)}
     />
     <Text style={styles.texto}>Cargo</Text>
     <TextInput
      style = {styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setCargo(texto)}
     />
     
     <Button 
      title="Novo Cadastro"
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