import axios from 'axios'
const http = axios.create({
  baseURL: 'http://192.168.0.4:4000'
})

http.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500
  if (!expectedError) {
    return Promise.reject(error)
  }
})

const Api = {

  // Usuarios
  async getUsuarios() {
    try {
      return await http.get('/usuarios')
    } catch (error) {
      console.error(error)
    }
  },

  async getUsuariosId(id) {
    try {
      return await http.get('/usuarios/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  async editarUsuarios(obj) {
    try {
      return await http.put('/usuarios', obj)
    } catch (error) {
      console.error(error)
    }
  },

  async crearUsuarios(obj) {
    try {
      return await http.post('/usuarios', obj)
    } catch (error) {
      console.error(error)
    }
  },
  async eliminarUsuarios(id) {
    try {
      return await http.delete('/usuarios/' + id)
    } catch (error) {
      console.error(error)
    }
  },

  //Productos
  async getProductos() {
    try {
      return await http.get('/productos')
    } catch (error) {
      console.error(error)
    }
  },

  async getProductosId(id) {
    try {
      return await http.get('/productos/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  async editarProductos(obj) {
    try {
      return await http.put('/productos', obj)
    } catch (error) {
      console.error(error)
    }
  },

  async crearProductos(obj) {
    try {
      return await http.post('/productos', obj)
    } catch (error) {
      console.error(error)
    }
  },
  async eliminarProductos(id) {
    try {
      return await http.delete('/productos/' + id)
    } catch (error) {
      console.error(error)
    }
  },

  //Ordenes

  async getOrdenes() {
    try {
      return await http.get('/ordenes')
    } catch (error) {
      console.error(error)
    }
  },

  async getOrdenesId(id) {
    try {
      return await http.get('/ordenes/' + id)
    } catch (error) {
      console.error(error)
    }
  },
  async editarOrdenes(obj) {
    try {
      return await http.put('/ordenes', obj)
    } catch (error) {
      console.error(error)
    }
  },

  async crearOrdenes(obj) {
    try {
      return await http.post('/ordenes', obj)
    } catch (error) {
      console.error(error)
    }
  },
  async eliminarOrdenes(id) {
    try {
      return await http.delete('/ordenes/' + id)
    } catch (error) {
      console.error(error)
    }
  },


  async obtenercarro(placa) {
    try {
      return await http.get('/parcial?placa=' + placa)
    } catch (error) {
      console.error(error)
    }
  },

//Envios

async getEnvios() {
  try {
    return await http.get('/envios')
  } catch (error) {
    console.error(error)
  }
},

async getEnviosId(id) {
  try {
    return await http.get('/envios/' + id)
  } catch (error) {
    console.error(error)
  }
},
async editarEnvios(obj) {
  try {
    return await http.put('/envios', obj)
  } catch (error) {
    console.error(error)
  }
},

async crearEnvios(obj) {
  try {
    return await http.post('/envios', obj)
  } catch (error) {
    console.error(error)
  }
},
async eliminarEnvios(id) {
  try {
    return await http.delete('/envios/' + id)
  } catch (error) {
    console.error(error)
  }
},

//Comentarios

async getComentarios() {
  try {
    return await http.get('/comentarios')
  } catch (error) {
    console.error(error)
  }
},

async getComentariosId(id) {
  try {
    return await http.get('/comentarios/' + id)
  } catch (error) {
    console.error(error)
  }
},
async editarComentarios(obj) {
  try {
    return await http.put('/comentarios', obj)
  } catch (error) {
    console.error(error)
  }
},

async crearComentarios(obj) {
  try {
    return await http.post('/comentarios', obj)
  } catch (error) {
    console.error(error)
  }
},
async eliminarComentarios(id) {
  try {
    return await http.delete('/comentarios/' + id)
  } catch (error) {
    console.error(error)
  }
},

}

export default Api