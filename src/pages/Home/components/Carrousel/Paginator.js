import React from 'react'
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native'

export default Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions()

  return (
    <View style={{ flexDirection: 'row', height: 64 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 12, 12],
          extrapolate: 'clamp'
        })
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.1, 10, 0.1],
          extrapolate: 'clamp'
        })

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity, }]}
            key={i.toString()}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#776ABC',
    marginHorizontal: 10,
    marginTop: 10,
  }
})