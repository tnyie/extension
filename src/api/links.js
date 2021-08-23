import { APIReq, GetUserID } from '.'

export const CreateLink = async (linkObj) => {
    const response = await APIReq("/links", "POST", linkObj)
    return response
}

export const GetUserLinks = async () => {
    const response = await APIReq("/links/user/"+ await GetUserID())
    return response
}