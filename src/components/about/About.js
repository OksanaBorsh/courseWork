import React from 'react';
import './about.css';
import aboutImg from'./../../img/about.svg'

const About = () => {
    return ( 
        <section className='about'>
            <div className="container">
                <div className="about_content">
                    <div className="about_img">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="about_text">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque quam tortor, malesuada iaculis. </span> 
                        <span>Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.</span> 
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;