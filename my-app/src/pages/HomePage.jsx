import { Link } from "react-router-dom";
const HomePage = (props) =>{
    
    return(<div>
        
        <h1>Home Page</h1>
        <Link to={{
            pathname: "/AddCard"
        }}>
        <button>Add new Card</button></Link>
        
    </div>)
}
export default HomePage;