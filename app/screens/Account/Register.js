import React, {useRef} from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Toast, {DURATION} from "react-native-easy-toast";
import RegisterForm from "../../components/Account/RegisterForm";

export default function Register() {
    const toastRef = useRef();
    return (
        <KeyboardAwareScrollView>
            <Image
                soure={require("../../../assets/img/witilogo.png")}
                resizeMode="contain"
                sylte={styles.logo}
            />
            <View style={styles.viewFrom}>
                <RegisterForm toastRef={toastRef} />
            </View>
            <Toast
                ref={toastRef}
                position="top"
                opacity={0.9}
                // style={{backgroundColor:'red'}}
                positionValue={200}
                fadeInDuration={750}
                fadeOutDuration={1000}

            />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: "100",
        height: 150,
        marginTop:20,
    },
    viewFrom: {
        marginRight: 40,
        marginLeft:40,
    }
})