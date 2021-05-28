import React from 'react'
import { View, Image, StyleSheet, Text, Button } from 'react-native'

export default function () {
    return (
        <View >
            <View style={styles.ti}>
                <Image style={styles.log} source={require("../assets/img/1.png")} />
                <Text style={styles.creden}>Hola Usuario!</Text>
            </View>
            <View style={styles.ti}>
                <Image style={styles.log} source={require("../assets/img/17.jpg")} />
                <Text style={styles.creden}>Inicio</Text>
            </View>
            <View style={styles.ti}>
                <Image style={styles.log} source={require("../assets/img/18.png")} />
                <Text style={styles.creden}>Carrito De Compras</Text>
            </View>
            <View style={styles.ti}>
                <Image style={styles.log} source={require("../assets/img/19.png")} />
                <Text style={styles.creden}>Mis Ordenes</Text>
            </View>
            <View style={styles.ti}>
                <Image style={styles.log} source={require("../assets/img/21.png")} />
                <Text style={styles.creden}>Editar Perfil</Text>
            </View>
            <View style={styles.ti}>
                <Image style={styles.log} source={require("../assets/img/21.png")} />
                <Text style={styles.creden}>Comentarios</Text>
            </View>
            <View style={styles.ti}>
                <Image style={styles.log} source={require("../assets/img/21.png")} />
                <Text style={styles.creden}>Admin</Text>
            </View>
            <View style={styles.ti}>
                <Image style={styles.log} source={require("../assets/img/20.png")} />
                <Text style={styles.creden}>Cerrar Sesion</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    log: {
        width: 40,
        height: 40,
        marginTop: 40
    },
    creden: {
        fontSize: 20
    },
    crede: {
        fontSize: 30
    },
    ti: {
        padding: 5,
        background: '#FFFFFF',
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})