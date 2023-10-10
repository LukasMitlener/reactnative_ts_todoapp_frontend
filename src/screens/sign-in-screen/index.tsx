import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Button } from "react-native"


const SignInScreen = () => {
  const navigation = useNavigation()
  const navigateToSignInScreen = () => {
    navigation.navigate("AuthStack", {
      screen: "SignUp"
    })
  }

  return (
      <Box>
        <Text>
          Welcome Back
        </Text>
        <Button title="navigate to Sign up" onPress={navigateToSignInScreen} />
      </Box>
  )
}

export default SignInScreen
