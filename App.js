import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import firebase from './src/firebaseConnection';



//desabilitar avivo yellowbox
console.disableYellowBox=true;

export default function meuApp() {

  //constante useState/varivel de estado
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  

  useEffect(()=>{
    async function Dados(){





      
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



 return (
   <View style={{marginTop: 25}}>
     <Text style={{fontSize:25}}>Nome: {nome}</Text>
     <Text style={{fontSize:25}}>Idade: {idade}</Text>
     
   </View>
  );
}