import WelcomeScreen from "@/screens/welcome-screen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { AuthStackParamList } from "./types"

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator
