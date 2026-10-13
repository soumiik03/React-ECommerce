import React from "react";

type ProfileClassProps = {
    name: string;
    address: string;
    email: string;
};

type ProfileClassState = {
    count: number;
};

class ProfileClass extends React.Component<ProfileClassProps, ProfileClassState> {
    constructor(props: ProfileClassProps) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    override render() {
        return (
            <div style={{ border: "1px solid black" }}>
                <h1>Name: {this.props.name}</h1>
                <h1>Address: {this.props.address}</h1>
                <h1>Email: {this.props.email}</h1>
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