import { Header } from 'react-native-elements'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function () {
    return (
        <SafeAreaProvider>
            <Header backgroundImage={require("../assets/img/16.jpg")}
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Cafe Guzmán', style: { color: '#fff' } }}
            />
        </SafeAreaProvider>
    )
}


