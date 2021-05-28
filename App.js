import React from 'react'
import { View } from 'react-native'
import 'react-native-gesture-handler'
import Card from './components/Card'
import img from './assets/img/52.jpeg'
import Header from "./components/Header"
import Login from "./views/Login"
import Inicio from "./views/Inicio"
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Metodo_Pago from './components/Metodo_Pago'
import Menu from './components/Menu'
import Perfil from './components/Perfil'
import Comentarios from './views/Comentarios/Comentarios'
import Comentarios_edit from './views/Comentarios/edit'
import Comentarios_add from './views/Comentarios/add'
import Ordenes from './views/Ordenes/Ordenes'
import Ordenes_edit from './views/Ordenes/edit'
import Ordenes_add from './views/Ordenes/add'
import Productos from './views/Productos/Productos'
import Productos_edit from './views/Productos/edit'
import Productos_add from './views/Productos/add'


  



const Stack = createStackNavigator();

export default () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="productos">
        <Stack.Screen name="login" component={ Login } />
        <Stack.Screen name="inicio" component={Inicio} />
        <Stack.Screen name="comentarios" component={Comentarios} />
        <Stack.Screen name="comentarios_edit" component={Comentarios_edit} />
        <Stack.Screen name="comentarios_add" component={Comentarios_add} />
        <Stack.Screen name="ordenes" component={Ordenes} />
        <Stack.Screen name="ordenes_edit" component={Ordenes_edit} />
        <Stack.Screen name="ordenes_add" component={Ordenes_add} />
        <Stack.Screen name="productos" component={Productos} />
        <Stack.Screen name="productos_edit" component={Productos_edit} />
        <Stack.Screen name="productos_add" component={Productos_add} />
      </Stack.Navigator>
    </NavigationContainer>    
  )
}



// import React from 'react'
// import { StyleSheet } from 'react-native'
// import 'react-native-gesture-handler'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import Login from "./views/Login"
// import Header from "./components/Header"
// import Navbar from "./components/Navbar"
// import Search from "./components/Search"
// import Inicio from "./views/Inicio"
// import Api from "./api"
// import {useEffect} from "react"
// import state from './redux'
// import { ADD_PRODUCTOS } from './redux/carrito'

// export default () => {
//   const getProducto= async () => {
//     const response = await Api.getProducto()
//   }
//   useEffect(() => {
//     state.dispatch({
//       type: ADD_PRODUCTOS,
//       payload: { id: 1, name: 'producto' }
//     })
//     getProducto
//   })
//   const Stack = createStackNavigator()

//     return(
//       <div>
//       <Header></Header>
//       <Navbar></Navbar>
//       <Search></Search>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="login">
//           <Stack.Screen name="login" component={ Login } />
//           <Stack.Screen name="inicio" component={ Inicio } />
      
//         </Stack.Navigator>
//       </NavigationContainer>
//       </div>
//     )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignContent: 'space-between',
//     flexDirection: 'row',
//   },
// })

