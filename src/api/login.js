import { APIReq } from ".";

export const GetUserID = async () => {
    const response = await APIReq("/tokens", "GET", null)
    return response.user_id
}

export const Login = async (details) => {
    console.log("logging in...")
    const response = await APIReq("/keys", "POST", details)
    localStorage.setItem("token", "Key " + response.key)
    return response.key
}
