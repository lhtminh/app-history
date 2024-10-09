import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ListCard from './ListCard'
import { ITotalData } from '@/data/data'
import { router } from 'expo-router'
import { getRandomArray } from '@/utils/common'

type Props = {
  data: ITotalData
}

const ListTimeLine = ({ data }: Props) => {
  return (
    <View className="flex-row gap-2 -mt-4">
      <View className="flex-col items-center pt-2">
        <View className="h-2.5 w-2.5 bg-primary-500 rounded-full" />
        <View className={`w-0.5 h-[350px] bg-primary-100`} />
      </View>
      <View className="flex-1 space-y-2">
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold text-[20px] text-gray-800">{data.title}</Text>
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: '/view-more',
                params: {
                  menuId: data.id,
                },
              })
            }}
          >
            <Text className="font-medium text-sm text-primary-500">Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-normal text-md leading-5 text-gray-400">
            ({data.start} - {data.end})
          </Text>
        </View>
        <View>
          <ListCard items={getRandomArray(data.list, 2)} />
        </View>
      </View>
    </View>
  )
}

export default ListTimeLine
