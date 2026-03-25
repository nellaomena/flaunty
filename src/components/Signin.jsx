import axios from "axios"
import React, {useState} from "react"
import { Link , useNavigate} from "react-router-dom"
const Signin =() =>{

    const navigate = useNavigate();
    
    // declare the two states 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    // states for hosting 
    const[loading, setLoading] = useState("")
    const[success, setSuccess] = useState("")
    const[error, setError] = useState("")
    
    // function to handle sybmit 
    const handlesubmit = async (e) =>{
        e.preventDefault()
        setLoading("Please wait...")
        
        // create empty digital envelope to store user inputs
        const formdata = new FormData()
        
        // append 
        formdata.append("email" , email)
        formdata.append("password" , password)
        
        try {
            const response = await axios.post ("http://higgs.alwaysdata.net/api/signin" , formdata)
            setSuccess(response.data.message)
            setLoading("")
            // if login is successful we save user to local storage 
            // NB: direct user to homepage (get products)
            if (response.data.user){
                // login success
                localStorage.setItem("user" , JSON.stringify(response.data.user))
                // redirect the user to homepage
                navigate('/')
                
            }
            else{
                // login failed 
                setSuccess(response.data.message)
            }
            
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
        
    }
    



        return(
            <div className="row mt-3 justify-content-center">
                <div className="card shadow col-md-6 p-4">
                    <h1>Sign in🖥️</h1>

                    {/* bind the states */}
                    <h2 className="danger">{loading}</h2>
                    <h2>{success}</h2>
                    <h2>{error}</h2>

                    <form action="" onSubmit={handlesubmit}>


                        <input type="text" className= "form-control" placeholder="Enter Email" onChange={(e) =>setEmail(e.target.value)}/><br />
                        <input type="text" className="form-control" placeholder="Enter Password" onChange={(e) =>setPassword(e.target.value)}/><br />
                        <button type="submit" className="btn btn-danger">Signin</button> <br /> <br />
                        <p>Don't have an account<Link to= '/signup'>Sign Up</Link> </p><br />

                    </form>

                </div>

            </div>
        )
    }
    


export default Signin 