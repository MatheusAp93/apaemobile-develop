import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useUpdateAlert } from './src/hooks/updateAlert'

import Routes from './src/routes'

export default function App() {
  useUpdateAlert()

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}
