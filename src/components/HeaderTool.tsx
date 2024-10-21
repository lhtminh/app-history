import { View } from 'react-native'
import React from 'react'
import IconButton from './IconButton'
import { ArrowLeft, Menu, NotificationBing, SearchNormal } from 'iconsax-react-native'
import { router } from 'expo-router'

interface Props {
  hasBack?: boolean
}

const HeaderTool = ({ hasBack = false }: Props) => {
  const menuPress = () => {
    router.push('/menu')
    console.log('menuPress')
  }
  const searchPress = () => {
    router.push('/search')
  }
  const notificationPress = () => {
    console.log('notificationPress')
  }

  return hasBack ? (
    <View className="flex-row justify-between items-center px-5 py-2">
      <IconButton IconName={ArrowLeft} onPress={() => router.back()} />
    </View>
  ) : (
    <></>
  )
}

export default HeaderTool
