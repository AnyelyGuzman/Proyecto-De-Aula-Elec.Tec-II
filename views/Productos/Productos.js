import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native'
import { useIsFocused } from "@react-navigation/native"
import Api from '../../api'

export default props => {
    const [productos, setProductos] = useState([])
    const isFocused = useIsFocused()

    const renderItem = ({ item }) => {
        return (
            <View>
                <Button title="Agregar" color="#5DADE2" onPress={() => handleClick(null, 'create')} style={styles.edit} />
                <View style={styles.item}>
                    <Text style={styles.title}>id_productos: {item.id_productos}</Text>
                    <Text style={styles.title}>nombre: {item.nombre}</Text>
                    <Text style={styles.title}>cantidad: {item.cantidad}</Text>
                    <Text style={styles.title}>precio: {item.precio}</Text>
                    <Button title="Editar" color="#2ECC71" onPress={() => handleClick(item.id_productos, 'edit')} style={styles.edit} />
                    <Button title="Eliminar" color="#000000" onPress={() => handleClickDelete(item.id_productos)} />
                </View>
            </View>
        )
    }

    const handleClick = (id_productos, tipo) => {
        if (tipo === 'create') props.navigation.navigate({ name: 'productos_add' })
        if (tipo == 'edit') props.navigation.navigate({ name: 'productos_edit', params: { id_productos } })
    }
    const getProductos = async () => {
        const response = await Api.getProductos()
        if (response && response.data) setProductos(response.data)
    }

    const handleClickDelete = async id_productos => {
        const response = await Api.eliminarProductos(id_productos)
        if (response && response.status === 200) {
            getProductos()
        }


    }


    useEffect(() => {
        getProductos()
    }, [props.navigation])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={productos}
                renderItem={renderItem}
                keyExtractor={item => `${item.id_productos} ${item.name}`}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#83EEDC',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});