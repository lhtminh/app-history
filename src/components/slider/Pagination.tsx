import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { IData } from '@/data/data'

type Props = {
  items: IData[]
  paginationIndex: number
  scrollX: SharedValue<number>
}
const { width } = Dimensions.get('screen')

const Pagination = ({ items, paginationIndex, scrollX }: Props) => {
  return (
    <View className="flex-row h-15 justify-center items-center">
      {items.map((_, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const pgAnimationStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [8, 24, 8],
            // Extrapolation.CLAMP,
          )
          return {
            width: dotWidth,
          }
        })

        return (
          <Animated.View
            className={`h-2 w-2 rounded-full mx-1 ${paginationIndex === index ? 'bg-primary-500' : 'bg-white'}`}
            style={[pgAnimationStyle]}
            key={index}
          />
        )
      })}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({})
