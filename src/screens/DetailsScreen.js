import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

function DetailsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <TouchableOpacity style = {{
          backgroundColor: "lightblue",
          padding: 10,
          marginTop: 10,
          borderRadius: 5,
        }}       
        onPress={() => {
          navigation.goBack()}}  >
          <Text>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{
          backgroundColor: "lightblue",
          padding: 10,
          marginTop: 10,
          borderRadius: 5,
        }}       
        onPress={() => {
          navigation.navigate('Settings');}}  >
          <Text>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default DetailsScreen;