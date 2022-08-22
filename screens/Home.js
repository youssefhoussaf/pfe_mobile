import * as React from 'react';
import { StyleSheet, View, Text } from "react-native";


export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home page!</Text>
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
  
