import React from "react";

type ProfileClassProps = {
    name: string;
    address: string;
    email: string;
};

type GitHubUser = {
    name: string;
    avatar_url: string;
    bio:string,
    location:string
};

type ProfileClassState = {
    //count: number;
    userDetails: GitHubUser | null;
};

class ProfileClass extends React.Component<ProfileClassProps, ProfileClassState> {
    constructor(props: ProfileClassProps) {
        super(props);
        this.state={
            userDetails:null
        }
        console.log("Ctr is called")
    }

    override async componentDidMount() {
        const response = await fetch("https://api.github.com/users/soumiik03");
        const data = await response.json()
        this.setState({
            userDetails: data,
        });
        console.log("Component Did Mount");
    }
        
 
    override componentDidUpdate() {
        console.log("Update is called");

        
    }

    override componentWillUnmount(): void {
        console.log("Unmount is called");
    } 

    /* override componentDidMount(): void {
            console.log("Child mount is called")
    } */

    override render() {
        if (this.state.userDetails === null) {
            return <h1>loading...</h1>;
        } 

        /* const { name, avatar_url } = this.state.userDetails; */
        console.log("Render is called")
        return (
            <div style={{ border: "1px solid black" }}>
                <h1>Class Based Component</h1>
                <h1>Name: {this.state.userDetails?.name}</h1>
                <h1>Address: {this.state.userDetails.location}</h1>
                <h1>BIO -{this.state.userDetails.bio}</h1>
                <img style={{width: 80, height: 80}} src={this.state.userDetails.avatar_url}/>
                {/* <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}
                >
                    Increment
                </button> */}
            </div>
        );
    }
}

export default ProfileClass;

//Constructor->Render Method->ComponentDidMount->Again rerender->Constructor->
// Render Method->componentDidUpdate->componentWillUnmount(Leave the page)