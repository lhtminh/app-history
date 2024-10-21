import React, { useEffect, useRef } from 'react'
import { Tabs } from 'expo-router'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Bookmark, FavoriteChart, Menu, TableDocument } from 'iconsax-react-native'
import * as Animatable from 'react-native-animatable'

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
}
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
}

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
}
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }
interface ITabIcon {
  focused: boolean
  title: string
  onPress: any
  IconName: any
}
const TabIcon = ({ focused, title, onPress, IconName }: ITabIcon) => {
  const colors = {
    white: '#fff',
    primary600: '#514534',
    active: "#B79B75"
  }
  const viewRef = useRef<any>(null)
  const circleRef = useRef<any>(null)
  const textRef = useRef<any>(null)

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1)
      circleRef.current.animate(circle1)
      textRef.current.transitionTo({ scale: 1 })
    } else {
      viewRef.current.animate(animate2)
      circleRef.current.animate(circle2)
      textRef.current.transitionTo({ scale: 0 })
    }
  }, [focused])
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={onPress}>
      <Animatable.View ref={viewRef} duration={500} style={styles.container}>
        <View
          style={[
            styles.btn,
            {
              borderColor: colors.primary600,
              backgroundColor: colors.white,
            },
          ]}
        >
          <Animatable.View ref={circleRef} style={styles.circle} />
          <IconName
            size={32}
            color={focused ? colors.white : colors.primary600}
            variant={focused ? 'Bold' : 'Outline'}
          />
        </View>
        <Animatable.Text ref={textRef} style={[styles.text]}>
          {title}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
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
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: {
            height: 84,
            backgroundColor: '#B79B75',
            paddingTop: 12,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Trang chủ',
            headerShown: false,
            tabBarButton: ({ onPress, accessibilityState }) => (
              <TabIcon
                title="Trang chủ"
                IconName={TableDocument}
                focused={accessibilityState?.selected ?? false}
                onPress={onPress}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            tabBarButton: ({ onPress, accessibilityState }) => (
              <TabIcon
                title="Bookmark"
                IconName={Bookmark}
                focused={accessibilityState?.selected ?? false}
                onPress={onPress}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="trend"
          options={{
            title: 'Trend',
            tabBarButton: ({ onPress, accessibilityState }) => (
              <TabIcon
                title="Xu hướng"
                IconName={FavoriteChart}
                focused={accessibilityState?.selected ?? false}
                onPress={onPress}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="menu"
          options={{
            title: 'Chuyên mục',
            tabBarButton: ({ onPress, accessibilityState }) => (
              <TabIcon
                title="Danh mục"
                IconName={Menu}
                focused={accessibilityState?.selected ?? false}
                onPress={onPress}
              />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    marginBottom: 10,
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    margin: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B79B75',
    borderRadius: 25,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    marginTop: 5,
  },
})

export default TabsLayout
