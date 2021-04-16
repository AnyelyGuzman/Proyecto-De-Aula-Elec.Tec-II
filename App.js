import React from 'react'
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from "./views/Login"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Search from "./components/Search";
import Inicio from "./views/Inicio"


export default () => {
  const Stack = createStackNavigator()

    return(
      <div>
        <Header></Header>
        <Search></Search>
        <Navbar></Navbar>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="inicio">
          <Stack.Screen name="login" component={ Login } />
          <Stack.Screen name="inicio" component={ Inicio } />

        </Stack.Navigator>
      </NavigationContainer>
      </div>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
    flexDirection: 'row',
  },
})
