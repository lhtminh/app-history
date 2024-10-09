import { images } from '@/constants'
import { router } from 'expo-router'
import { useEffect } from 'react'
import { Image, ImageBackground } from 'react-native'

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)/home')
    }, 100   )

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <ImageBackground
        source={images.bg}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      >
        {/* <Redirect href="/(tabs)/home" /> */}
        <Image source={images.logo} resizeMode="contain" className="w-40" />
      </ImageBackground>
    </>
  )
}
