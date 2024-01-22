// import { Component } from "react";

// class Student extends Component{
//     render(){
//         return(
//             <>Hello , {this.props.name}</>
//         )
//     }
// }
// export default Student;

function Student (props){
    const {name} = props;
    return <h1>Hello, {name}!</h1>;
}
export default Student;