import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count=0;
        }
    }
    render(){
        return(
            <div style={{"border":"1px Black"}}>
                <h1>Name: {this.props.name}</h1>
                <h1>Address: {this.props.address}</h1>
                <h1>Email: {this.props.email}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increment</button>
            </div>
        )
    }
}
export default ProfileClass;