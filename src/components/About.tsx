import Profile from "./Profile"
import ProfileClass from "./ProfileClass"
import React from "react";
/* export const About = () => {
    return (
        <div>
            <h1>Function Component</h1>
            <Profile name="Soumik" address="Kota" email="Sou@gmail.com"/>
            <ProfileClass name="AKA" address="Lota" email="Aou@gmail.com"/>
        </div>
    ) 
} */
   
export class About extends React.Component{
    constructor(props:ProfileClass){
        super(props);
        console.log  ("Constructor is called");
    }
    override componentDidMount(): void {
        console.log("Component Did mount is called")    
    }

    override render(){
        console.log("Parent render is called")
        return(
            <div>
                <ProfileClass name="Soumik" address="Kol" email="sou@gmail.com"></ProfileClass>
            </div>
        )
    }
} 
