import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'

type Props = {
    label: string;
    selected: boolean;
    onPress: () => void;
}

export default function ChoiceShip({label, selected, onPress}: Props) {
  return (
    <Pressable>
      <Text>ChoiceShip</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({})