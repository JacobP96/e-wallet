import { Link } from "react-router-dom";
import UserCards from "../components/UserCards"
const AddCard = (props) =>{
    
    
    return(<div>
       
        <h1>Add Card Page</h1>
        <Link to={{
            pathname: "/"
        }}>
        <button className="btn btn-dark" >Back to HomePage</button></Link>
        <br/>
        <br/>

        <UserCards/>
       
        
    </div>)
}
export default AddCard;