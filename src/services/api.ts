import { IUser } from "@/types"
import axiosInstance, { BLOSSOM_TOKEN_NAME, saveToken } from "./config"

type RegisterUserTypes = IUser

export const registerUser = async ({
  email,
  name,
  password,
}: RegisterUserTypes) => {
  try {
    console.log('Registering user:', { email, name, password });  // <-- log
    const response = await axiosInstance.post("/users/create", {
      email,
      password,
      name,
    })
    console.log('Response from server:', response.data);  // <-- log
    return response.data.user
  } catch (error) {
    console.log("error in registerUser", error)
    throw error
  }
}

type LoginUserTypes = Omit<IUser, "name">

export const loginUser = async ({ email, password }: LoginUserTypes) => {
  try {
    console.log('Logging in user:', { email, password });  // <-- log
    const response = await axiosInstance.post("/users/login", {
      email,
      password,
    })
    const _token = response.data.token
    console.log('Received token:', _token);  // <-- log
    axiosInstance.defaults.headers.common["Authorization"] = _token
    saveToken(BLOSSOM_TOKEN_NAME, _token)
    console.log('Response from server:', response.data);  // <-- log
    return response.data.user
  } catch (error) {
    console.log("error in loginUser", error)
    throw error
  }
}
