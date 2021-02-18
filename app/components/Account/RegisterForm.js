import React, {useState} from "react";
import { StyleSheet, View} from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validations";
import {size, isEmpty} from "lodash";
import * as firebase from "firebase";
import {useNavigation}from "@react-navigation/native"

export default function RegisterForm(props) {
    const { toastRef } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)
    const [formData, setformData] = useState(defaultFormValue)
    const navigation = useNavigation();
    
    const onSubmit = () => {
        if (
            isEmpty(formData.email) ||
            isEmpty(formData.password) ||
            isEmpty(formData.repeatPassword)
        ) {
            toastRef.current.show("Llenar todos los campos",500);
        } else if (!validateEmail(formData.email)) {
            toastRef.current.show("Email invalido",500);
        } else if (formData.password!==formData.repeatPassword) {
            toastRef.current.show("Paswords no son iguales",500);
        } else if (size(formData.password)< 6) {
            toastRef.current.show("Password debe tener 6 caractares al menos",500);
        }
        else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(formData.email, formData.password)
                .then(() => {
                    navigation.navigate("account");
                })
                .catch(() => {
                    toastRef.current.show("El email ya esta en uso")
                })
        }
    };



    const onChange = (e, type) => {
        setformData({...formData, [type]: e.nativeEvent.text})
    }

    return (
        <View style ={styles.formContainer}>
            <Input
                placeholder="Correo electronico"
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="email"
                containerStyle={styles.inputForm}
                onChange={(e) =>onChange(e,"email")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
                />
            <Input
                placeholder="Password"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={(e) =>onChange(e,"password")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off": "eye"}
                        iconStyle={styles.iconRight}
                        onPress={()=>setShowPassword(!showPassword)}
                    />
                }
                />
            <Input
                placeholder="Repetir Prassword"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showRepeatPassword ? false : true}
                onChange={(e) =>onChange(e,"repeatPassword")}
                    rightIcon={
                        <Icon
                            type="material-community"
                            name={showRepeatPassword ? "eye-off": "eye"}
                            iconStyle={styles.iconRight}
                            onPress={()=> setShowRepeatPassword(!showRepeatPassword) }
                        />
                    }
            />
            <Button
                title="Unirse"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
        </View>
    )
}

function defaultFormValue() {
    return {
        email: "",
        password: "",
        repeatPassword: ""
    }
}
const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    inputForm: {
        width: "100%",
        marginTop: 20,
        
    },
    btnContainerRegister: {
    marginTop: 20,
    width: "95%"
    },
    btnRegister: {
        backgroundColor:"#00a680"
    },
    iconRight: {
        color:"#c1c1c1",
    }
});