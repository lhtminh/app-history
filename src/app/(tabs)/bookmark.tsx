import { ImageBackground, Text, View } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants'
import HeaderTool from '@/components/HeaderTool'
import ScreenWrapper from '@/components/ScreenWrapper'
import ListCard from '@/components/ListCard'
import { getRandomArray } from '@/utils/common'
import { allPosts } from '@/data/data'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from 'expo-router'

const Bookmark = () => {
  const [listBookmark, setListBookmark] = useState<any>([])

  useFocusEffect(
    React.useCallback(() => {
      const getAllBookmark = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys()
          const historyKeys = keys.filter((key) => key.includes('history'))
          const values = await AsyncStorage.multiGet(historyKeys)
          const result = Object.fromEntries(values)
          const arrayValue = Object.values(result).map((item: any) => JSON.parse(item))
          const filteredArray = allPosts.filter(item1 =>
            arrayValue.some(item2 => item1.id === item2.id && item1.category === item2.category)
          );
          setListBookmark(filteredArray)
        } catch (error) {
          console.error("Error fetching bookmarks:", error)
        }
      }

      getAllBookmark()

      return () => {
        // Cleanup function if needed
        setListBookmark([]); // Optionally clear bookmarks on unmount
      }
    }, []) // Dependency array to prevent continuous re-renders
  )

  return (
    <ImageBackground source={images.bg} className="flex-1">
      <ScreenWrapper>
        <HeaderTool />
        <View className="p-5 gap-4">
          <Text className="font-semibold text-3xl text-gray-800">Bài viết đã lưu</Text>
          <View>
            <ListCard items={getRandomArray(listBookmark, 2)} />
          </View>
        </View>
      </ScreenWrapper>
    </ImageBackground>
  )
}

export default Bookmark
