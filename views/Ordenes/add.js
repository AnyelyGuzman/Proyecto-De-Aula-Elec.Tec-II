import React, { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native"
import Api from '../../api'

export default props => {
    const [producto, setproducto] = React.useState("");
    const [cantidad, setcantidad] = React.useState("");

    const hladleSubmit = async e => {
        if (producto.length > 0) {
            const response = await Api.crearOrdenes({
                producto: producto,
                cantidad: cantidad
            })
            console.log(response)
            props.navigation.navigate('ordenes')
        }
    }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={val => setproducto(val)}
                value={producto}
                placeholder="Producto"
            />
            <TextInput
                style={styles.input}
                onChangeText={val => setcantidad(val)}
                value={cantidad}
                placeholder="Cantidad"
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
