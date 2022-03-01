import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../Dados/Firebase';

export default function Login(){
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [birthDate, setBirthDate] = useState('')
  const [conPassword, setConPassword] = useState('')

  async function cadastrar(){
    if(password !== conPassword){
      alert('Senha digitadas nao sao iguais.');
      return
    }
    
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( (value) => {
      firebase.database().ref('usuarios').child(value.user.uid).set({
        nome: nome,
        idade: birthDate       
      })
      

      navigation.navigate('Home', { user: value.user.email })
      //Navegando usuario para Home e levando o email do usuario para a tela home
    })
    .catch( (error) => {
        alert('Ops algo deu errado!');
        console.log(error);
        return;
    })

    setEmail('');
    setPassword('');
    setNome('');
    setBirthDate('');
    setConPassword('');
  }

  return(
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    <KeyboardAvoidingView style={styles.container1} behavior="padding">
      <Text style={styles.title}>Cadastrar</Text>

      <Text style={styles.texto}>Nome</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setNome(texto) }
      value={nome}
      />
      <Text style={styles.texto}>Idade</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setBirthDate(texto) }
      value={birthDate}
      />
      
      <Text style={styles.texto}>Email</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setEmail(texto) }
      value={email}
      />

      <Text style={styles.texto}>Senha</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setPassword(texto) }
      secureTextEntry={true}
      value={password}
      />
      <Text style={styles.texto}>Confirmar Senha</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setConPassword(texto) }
      secureTextEntry={true}
      value={conPassword}
      />

      <Button
      title="Cadastrar"
      onPress={cadastrar}
      />

      <TouchableOpacity style={{marginTop: 25 }} onPress={ () => navigation.navigate('Login')}>
        <Text style={{textAlign: 'center' }}>Já tenho uma conta</Text>
      </TouchableOpacity>


    </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3b5998',
  },
  container1:{
    flex:1,
    margin: 10,
    backgroundColor: '#3b5998'
  },
  title:{
    textAlign: 'center', 
    fontSize: 29, 
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 20,
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  }
});