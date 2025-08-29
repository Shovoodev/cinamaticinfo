import { icons } from "@/constants/icons";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

interface SearchBarProps {
  onPress: () => void;
  placeholder: string;
}
const SearchBar = ({ onPress, placeholder }: SearchBarProps) => {
  return (
    <View className=" flex-row items-center bg-slate-900 rounded-full px-5 py-4 ">
      <Image
        source={icons.search}
        className=" size-5"
        resizeMethod="auto"
        tintColor="#ad8bff"
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#a8b5bd"
        className=" flex-1 ml-2 text-white"
        onPress={onPress}
      />
    </View>
  );
};

export default SearchBar;
