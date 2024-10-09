import { ImageBackground, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'

type Props = {
  imageSource: any
  title: string
}

const MenuCard = ({ imageSource, title }: Props) => {
  return (
    <View className="rounded-2xl overflow-hidden">
      <ImageBackground
        className="w-full h-28 justify-center items-center relative"
        source={imageSource}
      >
        <View
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{ backgroundColor: '#00000080' }}
        />
        <Text className="font-semibold text-md text-white">{title}</Text>
      </ImageBackground>
    </View>
  )
}

export default MenuCard
