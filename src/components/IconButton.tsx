import { TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
  IconName: any
  onPress: () => void
  bg?: string
  color?: string
}

const IconButton = ({ IconName, onPress, bg = 'bg-white', color = '#1f2937' }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className={`rounded-full ${bg} w-10 p-2.5 justify-center items-center`}>
        <IconName size="20" color={color} />
      </View>
    </TouchableOpacity>
  )
}

export default IconButton
