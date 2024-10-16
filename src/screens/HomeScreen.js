import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";

function HomeScreen( {navigation} ) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <TouchableOpacity style = {{
          backgroundColor: "lightblue",
          padding: 10,
          marginTop: 10,
          borderRadius: 5,
        }}       
        onPress={() => {
          navigation.navigate('Details');}}  >
          <Text>Go to Details</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export default HomeScreen;

