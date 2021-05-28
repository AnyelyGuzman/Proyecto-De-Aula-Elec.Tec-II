import React, { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native"
import Api from '../../api'

export default props => {
    const [nombre, setnombre] = React.useState("");
    const [cantidad, setcantidad] = React.useState("");
    const [precio, setprecio] = React.useState("");

    const hladleSubmit = async e => {
        if (nombre.length > 0 && cantidad && precio ) {
            const response = await Api.crearProductos({
                nombre: nombre,
                cantidad: cantidad,
                precio: precio
            })
            console.log(response)
            props.navigation.navigate('productos')
        }
    }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={val => setnombre(val)}
                value={nombre}
                placeholder="Nombre"
            />
            <TextInput
                style={styles.input}
                onChangeText={val => setcantidad(val)}
                value={cantidad}
                placeholder="Cantidad"
            />
            <TextInput
                style={styles.input}
                onChangeText={val => setprecio(val)}
                value={precio}
                placeholder="Precio"
            />
            <Button
                title="Agregar"
                onPress={hladleSubmit}
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
