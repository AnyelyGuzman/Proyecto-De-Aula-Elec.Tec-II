import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Cards(props) {

    return (
        <View style={styles.view}>
            <Image
                source={{ uri: props.image }}
                style={styles.img}
            />
            <Text style={styles.text} >{props.name}</Text>
            <Text style={styles.textt}>{props.precio}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 130,
        height: 150
    },
    img: {
        height: 80,
    },
    text: {

    },
    text: {

    }
}

)
