import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";
import Footer from "./Footer";


const Getproduct = () => {
    let navigate = useNavigate();

    // declare states 
    const [loading, setLoading] = useState("")
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")
    const [visibleCount, setVisibleCount] = useState(8);

    // filter logic goes here 
    const filtered_products = products.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase()) ||
        item.product_description.toLowerCase().includes(search.toLowerCase())
    );
    // function to get products
    const getproducts = async () => {
        setLoading("lOADING PRODUCTS...")
        // try catch 
        try {
            const response = await axios.get("https://venelahiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")

        }
    }
    // call the function 

    useEffect(() => {
        getproducts()
    }, [])

    console.log(products)
    const imagepath = "https://venelahiggs.alwaysdata.net/static/images/"



    return (
        <div className="row">
            <div className="justify-content-center mt-3 mb-3">
                <input
                    type="search"
                    className="form-control w-20"
                    placeholder="🔎Search Products"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>


            {/* carousel goes here  */}
            <Carousel />
            <br />

            <h1 className="text-dark">Available products</h1>
            {/* bind the states  */}
            <h2 className="text-danger">{loading}</h2>
            <h2 className="text-danger">{error}</h2>

            {/* map here  */}
            {filtered_products.slice(0, visibleCount).map((singleproduct) => (







                <div className="col-md-3 mb-4">
                    <div className="card shadow h-100">

                        {/* image goes here  */}
                        <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "200px", objectFit: "contain" }} />
                        <div className="card-body">
                            <h2 className="text-dark">{singleproduct.product_name}</h2>
                            <p>{singleproduct.product_description}</p>
                            <b className="text-primary">Ksh {singleproduct.product_cost}</b> <br /> <br />
                            <button className="btn btn-danger" onClick={() => navigate('/makepayment', { state: { singleproduct } })}>Purchase Now!</button>
                        </div>
                    </div>
                </div>

            ))}

            {/* load more btn  */}
            {visibleCount < filtered_products.length && (
                <div className="text center mt-4">
                    <button className="btn btn-dark" onClick={() => setVisibleCount(visibleCount + 8)}>
                        Load More
                    </button>
                </div>
            )}


            {/* Footer goes here  */}
            <Footer />


        </div>
    )
}
export default Getproduct