import React from 'react';
import {StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons';
export function HeaderIconButton({name,onPress}){
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon name={name} color={'purple'}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
  container: {
      marginRight:16,
  },
});

