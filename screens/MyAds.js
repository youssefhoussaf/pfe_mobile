import * as React from 'react';
import { StyleSheet, View, Text } from "react-native";


export default function MyAds() {
    return (
        <View style={styles.container}>
            <Text>My Ads!</Text>
            <StatusBar style="auto" />
        </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
