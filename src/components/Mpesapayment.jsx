import { useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"



const Mpesapayment = () =>{
    const {singleproduct} = useLocation().state|| {}
    const imagepath = "http://venelahiggs.alwaysdata.net/static/images/"

    // declare states 
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
     // eslint-disable-next-line
    const [success, setSuccess]= useState("")  
    
    // function to make payment 
    const handlesubmit = async (e)=>{
        e.preventDefault()
        setLoading("Please wait...")

        // digital envelope
        const formdata = new FormData()

        // append
        formdata.append("phone" , phone)
        formdata.append("amount" , singleproduct.product_cost)
       

        try {
            const response = await axios.get("http://venelahiggs.alwaysdata.net/api/makepayment", formdata)
            setSuccess(response.data.message) 
            setLoading("")
            
        } catch (error) {
            setError("Something went Wrong")
            setLoading("")
        }
        
    }
    

    return(
        <div className="row justify-content-center">
            <h1 className="text-success text center">Make Payment - Lipa na Mpesa</h1>
            <div className="col-md-8 card shadow p-4">

                <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"200px", objectFit:"contain"}} />
            
                <div className="card-body">
                    <h1 className="text-danger">{singleproduct.product_name}</h1>


                    <p className="text-start">{singleproduct.product_description}</p>
                    <b className="text-primary">Ksh {singleproduct.product_cost}</b> <br />

                {/* bind the states  */}
                <h2 className="text-danger">{loading}</h2>
                <h2 className="text-danger">{error}</h2>


                    <form action="" onClick={handlesubmit}>
                        <input type="number" className="form-control" placeholder="Enter Phone 254XXXXXXXXX" onChange={(e)=>setPhone(e.target.value)}/> <br />
                        <button type="submit" className="btn btn-success">Make Payment</button>
                    </form>
                </div>
            </div>

        </div>
    )
} 

export default Mpesapayment