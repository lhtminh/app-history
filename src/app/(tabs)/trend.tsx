import { ImageBackground, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import HeaderTool from '@/components/HeaderTool'
import ScreenWrapper from '@/components/ScreenWrapper'
import ListCard from '@/components/ListCard'
import { allPosts } from '@/data/data'
import { getRandomArray } from '@/utils/common'

const Trend = () => {
  return (
    <ImageBackground source={images.bg} className="flex-1">
      <ScreenWrapper>
        <View className="p-5 gap-4">
          <HeaderTool />
          <Text className="font-semibold text-3xl text-gray-800">Xu hướng</Text>

          <View
            style={{
              paddingBottom: 100,
            }}
          >
            <ScrollView>
              <ListCard items={getRandomArray(allPosts, 12)} />
            </ScrollView>
          </View>
        </View>
      </ScreenWrapper>
    </ImageBackground>
  )
}

export default Trend
