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

  return (
    <View className="flex-row justify-between items-center px-5 py-2">
      {hasBack ? (
        <IconButton IconName={ArrowLeft} onPress={() => router.back()} />
      ) : (
        <IconButton IconName={Menu} onPress={menuPress} />
      )}
      <View className="flex-row gap-2">
        <View>
          <IconButton IconName={SearchNormal} onPress={searchPress} />
        </View>
        <View>
          <IconButton IconName={NotificationBing} onPress={notificationPress} />
        </View>
      </View>
    </View>
  )
}

export default HeaderTool
