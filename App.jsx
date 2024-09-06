import './gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PersistGate } from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Provider as StoreProvider } from 'react-redux'
import AppNavigation from './src/screens/navigation/AppNavigation'
import { persistor, store } from './src/store'

const App = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider store={store} >
        <PersistGate loading={null} persistor={persistor} >
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </PersistGate>
      </StoreProvider>
    </SafeAreaProvider>
  )
}

export default App