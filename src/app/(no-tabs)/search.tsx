import { ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants'
import ScreenWrapper from '@/components/ScreenWrapper'
import { router } from 'expo-router'
import { allPosts } from '@/data/data'
import ListCard from '@/components/ListCard'
import { getRandomArray, removeDiacritics } from '@/utils/common'

const Search = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState(getRandomArray(allPosts, 3))

  useEffect(() => {
    const searchPosts = () => {
      if (!searchText) return // Return all posts if no search term
      const normalizedSearchTerm = removeDiacritics(searchText.toLowerCase())
      const postsFilter = allPosts.filter((post) =>
        removeDiacritics(post.title.toLowerCase()).includes(normalizedSearchTerm),
      )
      setPosts(postsFilter)
    }
    searchPosts()
  }, [searchText])

  return (
    <ImageBackground source={images.bg} className="flex-1">
      <ScrollView className="flex-1">
        <ScreenWrapper>
          <View className="flex-row px-5 pt-10 items-center gap-2">
            <TextInput
              className="bg-white flex-1 py-3 px-4 rounded-full"
              value={searchText}
              onChangeText={setSearchText}
            />
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="font-medium text-md text-gray-800">Đóng</Text>
            </TouchableOpacity>
          </View>
          <View className="p-5">
            <ListCard items={posts} />
          </View>
        </ScreenWrapper>
      </ScrollView>
    </ImageBackground>
  )
}

export default Search
