import React from "react";
import { View, Text,Button } from "react-native";
import * as firebase from "firebase";

export default function UserLogged() {
    return(
    <View>
        <Text>Usuario Loggeado</Text>
        <Button
            title="Cerrar sesion"
            onPress={() => firebase.auth().signOut()}
            />

    </View>
    )
}