import React from 'react'

const Carousel = () => {
  return (
     <section class="row">
            <div class="col-md-12">
                {/* <!-- a division containing carousel content  --> */}
                <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    {/* <!-- a division containing images  --> */}
                    <div class="carousel-inner">
                        {/* <!-- div with image 1  --> */}
                        <div class="carousel-item active">
                            <img src="images/pic1.jpg" alt="pic1" width={1500} height={400}/>
                        

                        </div>
                        {/* <!-- div with image 2  --> */}
                        <div class="carousel-item">
                            <img src="images/pic2.jpg" alt="pic2" width={1500} height={400}/>
                        </div>
                        {/* <!-- div with image 3  --> */}
                        <div class="carousel-item">
                            <img src="images/pic3.jpg" alt="pic3" width={1500} height={400}/>
                        </div>
                        {/* <!-- div with slide 4  --> */}
                        <div class="carousel-item">
                            <img src="images/pic4.jpg" alt="pic4" width={1500} height={400}/>
                        </div>
                        {/* <!-- previous control  --> */}
                        <a href="#mycarousel" class="carousel-control-prev text-dark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon bg-danger"></span>
                        </a>
                        {/* <!-- next control  --> */}
                        <a href="#mycarousel" class="carousel-control-next text-dark" data-bs-slide="next">
                            <span class="carousel-control-next-icon bg-danger"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
       
  )
}

export default Carousel
