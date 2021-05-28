import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native'
import { useIsFocused } from "@react-navigation/native"

import Api from '../../api'

export default props => {
    const [ordenes, setordenes] = useState([])
    const isFocused = useIsFocused()

    const renderItem = ({ item }) => {
        return (
            <View>
                <Button title="Agregar" color="#5DADE2"  onPress={() => handleClick(null, 'create')} style={styles.edit} />
                <View style={styles.item}>

                    <Text style={styles.title}>id: {item.id_ordenes}</Text>
                    <Text style={styles.title}>Producto: {item.producto}</Text>
                    <Text style={styles.title}>Cantidad: {item.cantidad}</Text>
                    <Button title="Editar" color="#2ECC71" onPress={() => handleClick(item.id_ordenes, 'edit')} style={styles.edit} />
                    <Button title="Eliminar" color="#000000" onPress={() => handleClickDelete(item.id_ordenes)} />
                </View>
            </View>
        )
    }

    const handleClick = (id_ordenes, tipo) => {
        if(tipo === 'create') props.navigation.navigate({ name: 'ordenes_add' })
        if(tipo == 'edit') props.navigation.navigate({ name: 'ordenes_edit', params: { id_ordenes } })
    }

    const handleClickDelete = async id_ordenes => {
        const response = await Api.eliminarOrdenes(id_ordenes)
        if (response && response.status === 200) {
            getOrdenes()
        }


    }

    const getOrdenes = async () => {
        const response = await Api.getOrdenes()
        if (response && response.data) setordenes(response.data)
    }

    useEffect(() => {
        getOrdenes()
    }, [props.navigation, isFocused])

    return (
        <View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={ordenes}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id_ordenes} ${item.name}`}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#F5B7B1',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
    edit: {
        marginBottom: 1
    }
});