import { createContext } from "react";

const UserContext=createContext({
    name:"SoumikT",
    setUserName: (_name: string): void => {
        throw new Error("UserContext provider is missing")
    }
})

export default UserContext
