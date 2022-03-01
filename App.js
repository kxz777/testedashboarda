
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './src/pages/Cadastro';
import Home from './src/pages/Home';
import Login from './src/pages/Login';


const Stack = createStackNavigator();

export default function Routes() {
 return (
   <NavigationContainer >
       <Stack.Navigator>
           <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
           <Stack.Screen name="Cadastro" component={Cadastro}  options={{ headerShown: false }} />
           <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
       </Stack.Navigator>
   </NavigationContainer>
  );
}



