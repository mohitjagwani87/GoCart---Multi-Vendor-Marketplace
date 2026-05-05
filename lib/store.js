import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import productReducer from './features/product/productSlice'
import addressReducer from './features/address/addressSlice'
import ratingReducer from './features/rating/ratingSlice'
import authReducer from './features/auth/authSlice'

const AUTH_STORAGE_KEY = 'gocart-auth'

const loadAuthState = () => {
    if (typeof window === 'undefined') return undefined

    const storedAuth = window.localStorage.getItem(AUTH_STORAGE_KEY)
    if (!storedAuth) return undefined

    try {
        return JSON.parse(storedAuth)
    } catch {
        return undefined
    }
}

export const makeStore = () => {
    const preloadedAuth = loadAuthState()

    const store = configureStore({
        reducer: {
            cart: cartReducer,
            product: productReducer,
            address: addressReducer,
            rating: ratingReducer,
            auth: authReducer,
        },
        preloadedState: preloadedAuth ? { auth: preloadedAuth } : undefined,
    })

    if (typeof window !== 'undefined') {
        store.subscribe(() => {
            const authState = store.getState().auth

            if (authState?.currentUser) {
                window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authState))
            } else {
                window.localStorage.removeItem(AUTH_STORAGE_KEY)
            }
        })
    }

    return store
}