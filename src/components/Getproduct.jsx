import React, {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";


const Getproduct =() =>{
    let navigate = useNavigate();

    // declare states 
    const [loading, setLoading] = useState("")
    const [products, setProducts] = useState([])
    const [error, setError] = useState("") 

    // functio to get product s
    const getproducts = async ()=>{
        setLoading("lOADING PRODUCTS...")
        // try catch 
        try {
            const response = await axios.get("http://venelahiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data) 
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
            
        }
    }
    // call the function 

    useEffect(() =>{
        getproducts()
    }, [])
       
    console.log(products)
    const imagepath = "http://venelahiggs.alwaysdata.net/static/images/"


    return(
        <div className="row">

                {/* carousel goes here  */}
                <Carousel/> 
                <br />

            <h1 className="text-dark">Available products</h1>
            {/* bind the states  */}
            <h2 className="text-danger">{loading}</h2>
            <h2 className="text-danger">{error}</h2>
           
            {/* map here  */}
            {products.map(singleproduct=>(


                
                
                
                

                <div className="col-md-3 mb-4">
                    <div className="card shadow h-100">

                {/* image goes here  */}
                <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"200px", objectFit:"contain"}} />
                <div className="card-body">
                    <h2 className="text-dark">{singleproduct.product_name}</h2>
                    <p>{singleproduct.product_description}</p>
                    <b className="text-primary">Ksh {singleproduct.product_cost}</b> <br /> <br />
                    <button className="btn btn-danger" onClick={()=>navigate('/makepayment',{state:{singleproduct}} )}>Purchase Now!</button>
                </div>
                    </div>
            </div>

            ))}
        </div>
    )
}
export default Getproduct