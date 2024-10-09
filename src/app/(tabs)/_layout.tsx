import React from 'react'
import { Tabs } from 'expo-router'
import { Text, View } from 'react-native'
import { Bookmark, FavoriteChart, TableDocument, User } from 'iconsax-react-native'

type TabIconProps = {
  name: string
  IconName: any
  focused: boolean
  color: string
  size: number
}

const TabIcon = ({ name, color, focused, IconName }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <IconName size="24" color={color} variant={focused ? 'Bold' : 'Outline'} />
      {/* <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" /> */}
      <Text style={{ color }} className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#E43E09',
          tabBarInactiveTintColor: '#1F2937',
          tabBarStyle: {
            paddingTop: 8,
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: (props) => <TabIcon name="Home" IconName={TableDocument} {...props} />,
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            tabBarIcon: (props) => <TabIcon name="Bookmark" IconName={Bookmark} {...props} />,
          }}
        />

        <Tabs.Screen
          name="trend"
          options={{
            title: 'Trend',
            tabBarIcon: (props) => <TabIcon name="Xu hướng" IconName={FavoriteChart} {...props} />,
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
