import React, {useEffect} from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import Api from '../../api'

export default props => {
  const [comentarios, setcomentarios] = React.useState("");

  const getComentariosId = async id =>{
    const response = await Api.getComentariosId(id)
    if(response?.data) {
        const data = response?.data[0]
        setcomentarios(data.comentario)
    }
  }

  const hladleSubmit = async e => {
    if(comentarios.length > 0) {
        const response = await Api.editarComentarios({
            id: props.route.params?.id_comentarios,
            comentarios: comentarios
        })
        console.log(response)
        props.navigation.navigate('comentarios')
    }
  }

  useEffect(() => {
    if(props.route.params?.id_comentarios){
        getComentariosId(props.route.params?.id_comentarios)
    }
  }, [props.route.params?.id_comentarios])

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={ val => setcomentarios(val) }
        value={comentarios}
        placeholder="Comentario"
      />
      <Button
        title="Editar"
        onPress={ hladleSubmit }
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
