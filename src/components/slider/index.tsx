import { View, ViewToken } from 'react-native'
import React, { useRef, useState } from 'react'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import SliderItem from './SliderItem'
import Pagination from './Pagination'
import { IData } from '@/data/data'

type Props = {
  itemList: IData[]
}
const SlideImage = ({ itemList }: Props) => {
  const scrollX = useSharedValue(0)
  const [paginationIndex, setPaginationIndex] = useState(0)

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x
    },
  })

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
      setPaginationIndex(viewableItems[0].index)
    }
  }

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  }

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }])

  return (
    <View className="gap-4">
      <Animated.FlatList
        data={itemList}
        renderItem={({ item, index }) => <SliderItem item={item} index={index} scrollX={scrollX} />}
        horizontal
        keyExtractor={(item, index) => item.id + index.toString()}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.5}
      />
      <View>
        <Pagination items={itemList} paginationIndex={paginationIndex} scrollX={scrollX} />
      </View>
    </View>
  )
}

export default SlideImage
