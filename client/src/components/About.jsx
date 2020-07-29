import React from 'react';


const About = props => {
    return(
        <>
            <div class="container-fluid about text-center">
                <img src="/img/kittens.png" className="img-fluid text-center"  alt="kittens"/>
                
                <div class="centered">Our Mission</div>
                <h6 class="text-warning mission text-center ml-2">Helping animals find the loving home they deserve since 1985 </h6>
                
         
            </div>
            <h3 className="text-center text-info m-3">About Us</h3>
            <h5 className="text-center mb-5">We are a no-kill shelter solely operating off of donations. We believe every animal deserves a loving home and make sure every adoption is a perfect fit. </h5>

            
        </>
    )

}
export default About;