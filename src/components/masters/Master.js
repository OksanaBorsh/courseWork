import React from "react";
import './master.css';

import Line from './../../img/line-2.png';

import photo1 from './../../img/photo-1.png'
import photo2 from './../../img/photo-2.png'
import photo3 from './../../img/photo-3.png'
import photo4 from './../../img/photo-4.png'
import photo5 from './../../img/photo-5.png'

const Master = () => {
    return ( 
        <section className="master">
            <div className="container">
                <div className="master_text">
                    Наші мастера
                </div>
                <div className="master_content">
                <div className='line_one'>
                    <div className="first_line">
                        <div className="content_photo1">
                            <img src={photo1} ></img>
                        </div>
                        <div className="content_photo2">
                            <img src={Line}></img>
                        </div>
                        <div className="content-text">
                            <div className="content_name">
                            Олена Василівна
                            </div>
                            <div className="content_base">
                            Візажист
                            </div>
                        </div>
                        </div>
                        <div className="first_line">
                        <div className="content_photo1">
                            <img src={photo2} ></img>
                        </div>
                        <div className="content_photo2">
                            <img src={Line}></img>
                        </div>
                        <div className="content-text">
                            <div className="content_name">
                            Олена Василівна
                            </div>
                            <div className="content_base">
                            Візажист
                            </div>
                        </div>
                        </div>
                        <div className="first_line">
                        <div className="content_photo1">
                            <img src={photo1} ></img>
                        </div>
                        <div className="content_photo2">
                            <img src={Line}></img>
                        </div>
                        <div className="content-text">
                            <div className="content_name">
                            Олена Василівна
                            </div>
                            <div className="content_base">
                            Візажист
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='line_one'>
                    <div className="second_line">
                        <div className="content_photo1">
                            <img src={photo3} ></img>
                        </div>
                        <div className="content_photo2">
                            <img src={Line}></img>
                        </div>
                        <div className="content-text">
                            <div className="content_name">
                            Олена Василівна
                            </div>
                            <div className="content_base">
                            Візажист
                            </div>
                        </div>
                        </div>
                        <div className="second_line">
                        <div className="content_photo1">
                            <img src={photo4} ></img>
                        </div>
                        <div className="content_photo2">
                            <img src={Line}></img>
                        </div>
                        <div className="content-text">
                            <div className="content_name">
                            Олена Василівна
                            </div>
                            <div className="content_base">
                            Візажист
                            </div>
                        </div>
                        </div>
                        <div className="second_line">
                        <div className="content_photo1">
                            <img src={photo5} ></img>
                        </div>
                        <div className="content_photo2">
                            <img src={Line}></img>
                        </div>
                        <div className="content-text">
                            <div className="content_name">
                            Олена Василівна
                            </div>
                            <div className="content_base">
                                Візажист
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
     );
}
 
export default Master;