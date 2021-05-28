import { createStore, combineReducers } from 'redux'

import carritoRedux from './carrito'

const state = createStore(combineReducers({
    carrito: carritoRedux
}))

export default state
