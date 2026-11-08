import Profile from "./Profile"
import ProfileClass from "./ProfileClass"

export const About = () => {
    return (
        <div>
            <h1>Function Component</h1>
            <Profile name="Soumik" address="Kota" email="Sou@gmail.com"/>
            <ProfileClass name="AKA" address="Lota" email="Aou@gmail.com"/>
        </div>
    ) 
}
   
/* class About extends Component{
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
} */