import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import {NavigationHelpersContext, useNavigation } from "@react-navigation/native";


export default function UserGuest() {
    const navigation = useNavigation();
    return(
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Tu perfil de cuenta en WitiVegan</Text>  
            <Text stile={styles.description}>Comparte tu experiencia en los restaurantes veganos o vegetariones que visites
            y vota por los mejores. 
            </Text>
            <View style={styles.viewBtn}>
                <Button
                    title="Ve tu perfil"
                    buttonStyle={ styles.btnStye}
                    containerStyle={styles.containerStyle }
                    onPress={()=> navigation.navigate("login")}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign:"center",
    },
    description: {
        textAlign: "center",
        marginBottom: 20,
    },
    viewBtn: {
        flex: 1,
        alignItems: "center",
    },
    btnStye: {
        backgroundColor:"#00a680",
    },
    btnContainer: {
        width: "70%",
    }
});