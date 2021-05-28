import React, {useEffect} from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import Api from '../../api'

export default props => {
  const [producto, setproducto] = React.useState("");
  const [cantidad, setcantidad] = React.useState("");
  
  const getOrdenesId = async id =>{
    const response = await Api.getOrdenesId(id)
    if(response?.data) {
        const data = response?.data[0]
        setproducto(data.producto)
        setcantidad(data.cantidad)
    }
  }

  const hladleSubmit = async e => {
    if(producto.length > 0 && cantidad.length) {
        const response = await Api.editarOrdenes({
            id: props.route.params?.id_ordenes,
            producto: producto,
            cantidad: cantidad
        })
        console.log(response)
        props.navigation.navigate('ordenes')
    }
  }

  useEffect(() => {
    if(props.route.params?.id_ordenes){
        getOrdenesId(props.route.params?.id_ordenes)
    }
  }, [props.route.params?.id_ordenes])

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={ val => setproducto(val) }
        value={producto}
        placeholder="Producto"
      />
      <TextInput
        style={styles.input}
        onChangeText={ val => setcantidad(val) }
        value={cantidad}
        placeholder="Cantidad"
      />
      <Button
        title="Editar"
        onPress={ hladleSubmit }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
