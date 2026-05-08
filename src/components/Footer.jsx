import React from 'react'

const Footer = () => {
  return (
    <div>
            <section class="row bg-dark p-3">
            {/* <!-- child 1  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-light">About us</h2>
                <p class="text-light">
                    This is a world-class brand started way back in the year 2000. It has grown over the years managing
                    to provide different unique and qualified items for the consumers.
                </p>
            </div>
            {/* <!-- child 2  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-light">Contact us</h2>
                <form action="">
                    <input type="email" placeholder="Enter your email" class="form-control"/> <br/> <br/>
                    <textarea name="" id="" class="form-control" placeholder="Leave a comment"></textarea><br/>
                    <input type="submit" value="Send message" class=" btn btn-outline-danger"/>
                </form>
            </div>
            {/* <!-- child 3  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-light">Stay connected</h2>
                <a href="https:/facebook.com" className='mx-3'>
                    <img src="images/fb.png" alt="Facebook"/>
                </a>
                <a href="https:/instagram.com" className='mx-3'>
                    <img src="images/in.png" alt="Instagram"/>
                </a>
                <a href="https:/twiiter.com" className='mx-3'>
                    <img src="images/x.png" alt="X"/>
                </a>
                <br /> <br /> 
                <p class="text-light">You can reach out to us through the above social media platforms, ie Instagram
                    Facebook and X. Feel free to contact us at any time!</p>
                    <p className='text-light'>We're located in Nairobi CBD;Star Mall shop G-23</p>
            </div>
        </section>
  
    </div>
  )
}

export default Footer
