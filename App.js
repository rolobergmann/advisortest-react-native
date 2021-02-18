import React, {useEffect} from "react";
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/firebase";
import * as firebase from "firebase";
// import { LogBox } from "react-native"

// LogBox.ignoreWarnings([
//   "Animated: useNativeDriver was not specified.",
//   ]);
export default function App() {

  return <Navigation />;
}