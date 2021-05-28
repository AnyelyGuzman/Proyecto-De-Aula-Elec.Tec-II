import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native'
import { useIsFocused } from "@react-navigation/native"

import Api from '../../api'

export default props => {
    const [comentarios, setcomentarios] = useState([])
    const isFocused = useIsFocused()

    const renderItem = ({ item }) => {
        return (
            <View>
                <Button title="Agregar" color="#5DADE2"  onPress={() => handleClick(null, 'create')} style={styles.edit} />
                <View style={styles.item}>

                    <Text style={styles.title}>id: {item.id_comentarios}</Text>
                    <Text style={styles.title}>Comentario: {item.comentario}</Text>
                    <Button title="Editar" color="#2ECC71" onPress={() => handleClick(item.id_comentarios, 'edit')} style={styles.edit} />
                    <Button title="Eliminar" color="#000000" onPress={() => handleClickDelete(item.id_comentarios)} />
                </View>
            </View>
        )
    }

    const handleClick = (id_comentarios, tipo) => {
        if(tipo === 'create') props.navigation.navigate({ name: 'comentarios_add' })
        if(tipo == 'edit') props.navigation.navigate({ name: 'comentarios_edit', params: { id_comentarios } })
    }

    const handleClickDelete = async id_comentarios => {
        const response = await Api.eliminarComentarios(id_comentarios)
        if (response && response.status === 200) {
            getComentarios()
        }


    }

    const getComentarios = async () => {
        const response = await Api.getComentarios()
        if (response && response.data) setcomentarios(response.data)
    }

    useEffect(() => {
        getComentarios()
    }, [props.navigation, isFocused])

    return (
        <View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={comentarios}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id_comentarios} ${item.name}`}
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