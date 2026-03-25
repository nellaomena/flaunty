import axios from "axios"
import React, {useState} from "react"
import { Link } from "react-router-dom"

const Signup = () =>{
    // declare our states here 
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [phone, setPhone] = useState("")


    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    // FUNCTION TO HANDLE SUBMIT 
    const handlesubmit = async(e) =>{
        e.preventDefault()
        setLoading("Please Wait...")

        // create empty digital envelope to store user inputs 
        const formdata = new FormData()
        // APPPEND/ADD
        formdata.append("username", username)
        formdata.append("email" , email)
        formdata.append("password" ,  password)
        formdata.append("phone" , phone) 

        try {
            const response = await axios.post("http://venelahiggs.alwaysdata.net/api/signup" , formdata)
            setSuccess(response.data.message)
            setLoading("")
        }catch(error){
            setError(error.message)
            setLoading("")

        }





    }


    return(
        <div className="row mt-3 justify-content-center">
                <div className="col-md-6 card shadow p-4 ">
                    <h1>Signup✍🏽</h1>
                {/* bind the states  */}
                    <h2>{loading}</h2>
                    <h2>{success}</h2>
                    <h2>{error}</h2>


                    <form action="" onSubmit={handlesubmit}>
                        <input type="text" className="form-control" placeholder="Enter Username" onChange={(e) =>setUsername(e.target.value)}/> <br />

                        <input type="text" className="form-control" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)}/> <br />

                        <input type="text" className="form-control" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} /> <br />

                        <input type="text" className="form-control" placeholder="Enter Phone" onChange={(e)=>setPhone(e.target.value)}/> <br />

                        <button type="Submit" className="btn btn-danger col-md-6 w-100">Signup</button> <br /> <br />

                        <p>Already have an account? <Link to ='/signin'>Signin</Link></p> <br />
                        
                        
                    </form>
                </div>
        </div>
    )
}
export default Signup