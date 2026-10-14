import React from "react";

type ProfileClassProps = {
    name: string;
    address: string;
    email: string;
};

type GitHubUser = {
    name: string;
    avatar_url: string;
};

type ProfileClassState = {
    count: number;
    userDetails: GitHubUser | null;
};

class ProfileClass extends React.Component<ProfileClassProps, ProfileClassState> {
    constructor(props: ProfileClassProps) {
        super(props);
        this.state = {
            count: 0,
            userDetails: null,
        };
    }

    override async componentDidMount() {
        const response = await fetch("https://api.github.com/users/soumiik");
        const data = (await response.json()) as GitHubUser;
        this.setState({
            userDetails: data,
        });
        console.log("Component Did Mount");
        this.timer=setInterval(()=>{
            console.log("Class Component")
        })
    }

    override componentDidUpdate(prevProps,prevState) {
        console.log("Update is called");

        if(this.state.count != prevState.count){        //Same like useEffect array depedencies
            console.log("Called")
        }
    }

    override componentWillUnmount(): void {
        console.log("Unmount is called");
    }

    override render() {
        if (this.state.userDetails === null) {
            return <h1>loading...</h1>;
        }

        const { name, avatar_url } = this.state.userDetails;

        return (
            <div style={{ border: "1px solid black" }}>
                <h1>Name: {this.props.name}</h1>
                <h1>Address: {this.props.address}</h1>
                <h1>Email: {this.props.email}</h1>
                <h1>GitHub Name: {name}</h1>
                <img src={avatar_url} alt={name} style={{ width: 80, height: 80 }} />
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}
                >
                    Increment
                </button>
            </div>
        );
    }
}

export default ProfileClass;

//Constructor->Render Method->ComponentDidMount->Again rerender->Constructor->
// Render Method->componentDidUpdate->componentWillUnmount(Leave the page)