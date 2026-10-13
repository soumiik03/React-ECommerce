import { useState } from "react";

type ProfileProps = {
    name: string;
    address: string;
    email: string;
};

const Profile = (props: ProfileProps) => {
    const { name, address, email } = props;
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: "1px solid black" }}>
            <h1>Name: {name}</h1>
            <h1>Address: {address}</h1>
            <h1>Email: {email}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increment
            </button>
        </div>
    );
};

export default Profile;