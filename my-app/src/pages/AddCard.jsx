import { Link } from "react-router-dom";
const AddCard = (props) =>{
    
    
    return(<div>
       
        <h1>Add Card Page</h1>
        <Link to={{
            pathname: "/"
        }}>
        <button>Back to home page</button></Link>
        
    </div>)
}
export default AddCard;