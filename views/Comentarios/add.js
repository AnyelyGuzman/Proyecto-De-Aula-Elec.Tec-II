import React, { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import Api from '../../api'

export default props => {
    const [comentarios, setcomentarios] = React.useState("");

    const hladleSubmit = async e => {
        if (comentarios.length > 0) {
            const response = await Api.crearComentarios({
                comentarios: comentarios
            })
            console.log(response)
            props.navigation.navigate('comentarios')
        }
    }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={val => setcomentarios(val)}
                value={comentarios}
                placeholder="Comentario"
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
