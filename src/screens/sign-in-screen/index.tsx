import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { AuthScreenNavigationType } from "@/navigation/types"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Button } from "react-native"


const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>()
  const navigateToSignInScreen = () => {
    navigation.navigate("SignUp")
  }

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>
          Sign In Screen
        </Text>
        <Button title="navigate to Sign up" onPress={navigateToSignInScreen} />
      </Box>
    </SafeAreaWrapper>
  )
}

export default SignInScreen
