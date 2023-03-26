import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaFrameContext } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaFrameContext>
      <Text>Home Screen</Text>
    </SafeAreaFrameContext>
  )
}