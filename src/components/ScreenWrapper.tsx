import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const ScreenWrapper = ({ children }: Props) => {
  return <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>{children}</SafeAreaView>
}

export default ScreenWrapper
