const localState = {
    productos: []
}

export const ADD_PRODUCTOS = 'ADD_PRODUCTOS'

export default function carritoRedux(state = localState, action) {
    switch (action.type) {
        case ADD_PRODUCTOS: return { ...state, productos: action.payload }

        default: return { ...state }
    }
}

