import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import styles from "../Home/Style";
import { BatLogo } from "../../components/BatLogo";
import { BatTextInput } from "../../components/BatTextInput";
import { BatButton } from "../../components/BatButton";

const Home = () => {    
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
              <BatLogo/>
            </View>
            <View style={styles.inputContainer}>
              <BatTextInput/>
              <BatButton/>
            </View>
            <Text>Home</Text>
            <StatusBar style="light" />
        </View>
    )
}

export default Home;