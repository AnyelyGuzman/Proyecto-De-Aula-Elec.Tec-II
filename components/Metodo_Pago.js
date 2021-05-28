import React from 'react'
import { View, Image, StyleSheet, Text, Button } from 'react-native'
import { CheckBox } from 'react-native-elements'

export default function() {
    return (

        <View style={styles.cont}>
            <View style={styles.ti}>
                <Image style={styles.log} source={require("../assets/img/41.png")} />
                <Text style={styles.cred}>Metodo de Pago</Text>
            </View>
            <br />
            <Text style={styles.cre}>
                Subtotal
            </Text>
            <Text style={styles.cre}>
                Costo de Envio
            </Text>
            <Text style={styles.cre}>
                Total
            </Text>
            <View>
                <Image style={styles.din} source={require("../assets/img/40.png")} />
                <Text style={styles.crede}>
                    Efectivo
            </Text>
                <CheckBox
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o' />
            </View>
            <View>
                <Image style={styles.din} source={require("../assets/img/39.png")} />
                <Text style={styles.crede}>
                    Datafono
            </Text>
                <CheckBox style={styles.chec}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o' />
            </View>
            <Button
                title="Comprar"
                color="#000000"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ti: {
        padding: 5,
        background: '#FFFFFF',
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    log: {
        width: 40,
        height: 40,
        marginTop: 40
    },
    cre: {
        fontSize: 20,
        padding: 10
    },
    cred: {
        fontSize: 30,
        marginTop: 30
    },
    din: {
        width: 80,
        height: 70, 
    },
    crede:{
        fontSize: 30,
        padding: 5,
        background: '#FFFFFF',
        flex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    chec:{
        padding: 5,
        display: 'flex',
    }
})
