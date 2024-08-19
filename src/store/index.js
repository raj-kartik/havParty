import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";


const persistConfig = {
    key: 'HavParty',
    storage: AsyncStorage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

let customMiddleware = [];

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(customMiddleware),

    devTools: __DEV__,
});

export const persistor = persistStore(store);