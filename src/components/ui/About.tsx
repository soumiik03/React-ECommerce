import React, { Component } from 'react'
import Profile from '../Profile'
import ProfileClass from '../ProfileClass'

/*export const About = () => {
    return (
        <div>
            <ProfileClass name="Soumik" address="Kolkata" email="sou@gmail.com"/>
            <Profile name="Sam" address="Kota" email="sam@gmail.com"/>
        </div>
    ) 
}
*/    
class About extends Component{
    constructor(){
        super();

    }
    override render(): React.ReactNode {
        return(
            <div>
                <ProfileClass name="Soumik" address="Kol" email="sou@gmail.com"
            </div>
        )
    }
}