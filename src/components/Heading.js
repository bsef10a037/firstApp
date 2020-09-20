import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function Heading({children, props, style}){
  return <Text {...props} style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create ({
  text: {
    color: 'black',
    fontSize: 32,
  },
});

