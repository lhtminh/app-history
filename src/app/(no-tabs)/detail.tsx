import { Image, ImageBackground, ScrollView, StatusBar, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants'
import ScreenWrapper from '@/components/ScreenWrapper'
import IconButton from '@/components/IconButton'
import { ArrowLeft, Bookmark } from 'iconsax-react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { totalData } from '@/data/data'
import AsyncStorage from '@react-native-async-storage/async-storage' // Add this import

const Detail = () => {
  const { menuId, itemId } = useLocalSearchParams()
  const [isBookmarked, setIsBookmarked] = useState(false);
  const data = totalData[Number(menuId)]
  const postData = data.list.find((item) => item.id === Number(itemId))

  useEffect(() => {
    const checkBookmark = async () => {
      try {
        const bookmark = await AsyncStorage.getItem(`history-${postData?.category}${postData?.id}`);
        if (bookmark) {
          setIsBookmarked(true); // Set bookmark status if found
        }
      } catch (error) {
        console.error('Error checking bookmark:', error);
      }
    };

    checkBookmark(); // Call the function to check bookmark status
  }, [postData?.category, postData?.id]); // Dependency array to run effect when postData.id changes

  const handleBookMark = async () => {
    try {
      const bookmarkKey = `history-${postData?.category}${postData?.id}`;
      if (isBookmarked) {
        // Remove bookmark if already bookmarked
        await AsyncStorage.removeItem(bookmarkKey);
        setIsBookmarked(false); // Update state to reflect that it is no longer bookmarked
      } else {
        // Save bookmark if not bookmarked
        const bookmarkData = {
          id: postData?.id,
          category: postData?.category,
        };
        await AsyncStorage.setItem(bookmarkKey, JSON.stringify(bookmarkData));
        setIsBookmarked(true); // Update state to reflect that it is bookmarked
      }
    } catch (error) {
      console.error('Error saving bookmark:', error)
    }
  }
  return (
    <ImageBackground source={images.bg} className="flex-1">
      <StatusBar barStyle={'light-content'} />
      <ImageBackground source={postData?.image} className="w-full h-96">
        <ScreenWrapper>
          <View className="flex-col justify-between h-full py-4">
            <View className="flex-row items-center justify-between px-5">
              <IconButton
                IconName={ArrowLeft}
                bg="bg-white-lighter"
                onPress={() => router.back()}
                color="#fff"
              />
              <IconButton
                IconName={Bookmark}
                bg={isBookmarked ? "bg-red-300" : 'bg-white-lighter'}
                onPress={handleBookMark}
                color="#fff"
                
              />
            </View>
            <View className="flex-col items-start p-5">
              <View className="bg-primary-500 py-1 px-2 rounded-3xl">
                <Text className="text-gray-200 text-xs capitalize">{data.title}</Text>
              </View>
              <Text
                className="text-white font-medium text-lg"
                ellipsizeMode="tail"
                numberOfLines={2}
              >
                {postData?.description}
              </Text>
            </View>
          </View>
        </ScreenWrapper>
      </ImageBackground>
      <ScrollView className="flex-1 px-5 py-6 bg-background-300 -mt-4 rounded-t-3xl space-y-2">
        <Text className="font-semibold text-base text-gray-800">{postData?.title}</Text>
        <Text className="font-normal text-md text-gray-800">{postData?.description}</Text>
        <View className="space-y-4">
          {postData?.body.map((bodyElm) => (
            <View key={`${data.title}-${bodyElm.title}`} className="space-y-2">
              <Text className="font-semibold text-md text-gray-800">{bodyElm.title}</Text>
              {bodyElm.image && (
                <Image
                  source={bodyElm.image}
                  className="w-full h-52 rounded-lg"
                  resizeMode="cover"
                />
              )}
              <Text className="font-normal text-gray-800">{bodyElm.content}</Text>
            </View>
          ))}
        </View>
        <View className="h-12" />
      </ScrollView>
    </ImageBackground>
  )
}

export default Detail
