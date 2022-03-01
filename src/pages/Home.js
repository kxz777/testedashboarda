import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../Dados/Firebase';


export default function Home({ route }) {
  const navigation = useNavigation();

  async function logout(){
    await firebase.auth().signOut();

    alert('Deslogado com sucesso!');
    navigation.navigate('Login');
  }   
  
 return (

   <View style={styles.container1}>
       <Text style={styles.title}>Seja bem vindo</Text>

       <Text style={styles.email}>
        {route.params?.user}
        </Text>

        <Button
        title="Deslogar"
        onPress={logout}
        />

   </View>
  );
}

const styles = StyleSheet.create({
  container1:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998'
  },
  title:{
    fontSize: 25, 
  },
  email:{
    marginTop: 20,
    marginBottom: 15,
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})