import axios from "axios"
import React, { useState } from "react"

const Addproduct = () => {

    // declare the states 
    const [product_name, setProductName] = useState("")
    const [product_description, setProductDescription] = useState("")
    const [product_cost, setProductCost] = useState("")
    const [product_photo, setProductPhoto] = useState("")

    // define 3 states for hosting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    // function to submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("PLease Wait...")


        //   digital envelope 
        const formdata = new FormData()

        //   append 
        formdata.append("product_name", product_name)
        formdata.append("product_description", product_description)
        formdata.append("product_cost", product_cost)
        formdata.append("product_photo", product_photo)

        try {
            const response = await axios.post("http://venelahiggs.alwaysdata.net/api/addproduct", formdata)
            setSuccess(response.data.message)
            setLoading("")

        } catch (error) {
            setError(error.message)
            setLoading("")

        }

    }



    return (

        <div className="row justify-content-center  mt-3">
            <div className="col-md-8 card shadow p-4">
                <h1 className="text-danger">Add Product🩷</h1>

                {/* bind states  */}
                <h2>{loading}</h2>
                <h2>{success}</h2>
                <h2>{error}</h2>

                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="Enter your Product here" onChange={(e) => setProductName(e.target.value)} /> <br />
                    <textarea className="form-control" placeholder="Enter product description" onChange={(e) => setProductDescription(e.target.value)}></textarea> <br />
                    <input type="text" className="form-control" placeholder="Enter Product cost" onChange={(e) => setProductCost(e.target.value)} /><br />
                    <input type="file" accept="image/" className="form-control" placeholder="No file chosen" onChange={(e) => setProductPhoto(e.target.files[0])} /> <br /><br />

                    <button type="submit" className="btn btn-danger">Add Product</button>
                </form>

            </div>



        </div>
    )
}
export default Addproduct