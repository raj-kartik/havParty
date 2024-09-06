import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import logger from 'redux-logger'
const persistConfig = {
    key: 'HavParty',
    storage: AsyncStorage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

let customMiddleware = [];
if (__DEV__) customMiddleware.push(logger);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(customMiddleware),

    devTools: __DEV__,
});

export const persistor = persistStore(store);