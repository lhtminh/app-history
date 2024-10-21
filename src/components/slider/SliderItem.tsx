import { Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { IData, totalData } from '@/data/data'
import { useRouter } from 'expo-router'

type SliderItemProps = {
  item: IData
  index: number
  scrollX: SharedValue<number>
}
const { width } = Dimensions.get('screen')
const imageWidth = width - 80
const SliderItem = ({ item, index, scrollX }: SliderItemProps) => {
  const router = useRouter()
  const rnAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-width * 0.25, 0, width * 0.25],
      Extrapolation.CLAMP,
    )
    const scale = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0.82, 1, 0.82],
      Extrapolation.CLAMP,
    )
    return {
      transform: [
        {
          scale: scale,
        },
        {
          translateX: translateX,
        },
      ],
    }
  })
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/detail',
          params: {
            menuId: item.category,
            itemId: item.id,
          },
        })
      }
    >
      <Animated.View
        className="justify-center items-center"
        style={[{ width: width }, rnAnimatedStyle]}
      >
        <View className=" h-[200px] rounded-3xl overflow-hidden" style={{ width: imageWidth }}>
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={{ width: imageWidth }}
            className="h-[200px] justify-end"
          >
            <View className="flex-col items-start p-5">
              <View className="bg-primary-500 py-1 px-2 rounded-3xl">
                <Text className="text-white text-xs capitalize">
                  {totalData[item.category].title}
                </Text>
              </View>
              <View
                className=" p-2 mt-3 rounded-xl"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}
              >
                <Text
                  className="text-white font-medium text-lg"
                  ellipsizeMode="tail"
                  numberOfLines={2}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default SliderItem
