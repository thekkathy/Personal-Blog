import React from 'react';
import NavigateButton from './NavigateButton';

import camille from '../images/camille.png';

import "../styles/base.css";
import "../styles/about.css";

const About = () => {

    const blogLink = (
        <div className="container">
            <div className="row d-flex justify-content-center m-1">
                Check out my blog
            </div>
            <div className="row d-flex justify-content-center m-1">
                <i class="fas fa-newspaper"></i>
            </div>
        </div>
    );

    const shopLink = (
        <div className="container">
            <div className="row d-flex justify-content-center m-1">
                Check out my shop
            </div>
            <div className="row d-flex justify-content-center m-1">
                <i class="fas fa-store"></i>
            </div>
        </div>
    );

    return (
        <div className="container-fluid about-bg">
            <div className="row">
                <div className="col-4">
                    <img
                        src={camille}
                        alt= "Camille with a ski mask on a snow mobile"
                        className="img-fluid about-img"
                    />
                </div>
                <div className="col my-4">
                    <div className="card p-5">
                        <div className="container-fluid">
                            <h1>
                                A little bit about me...
                            </h1>
                            <div className="container-fluid mt-4 p-0">
                                <h2 className="h6 font-weight-bold">
                                    History:
                                </h2>
                                <p>
                                    Camille's Corner started back in the summer of 2019 when Camille first moved to NYC for an internship. Sitting behind a screen all day in the middle of a giant concrete jungle made her long for the proper outdoors. Hopelessly stuck between being drawn to the culture of cities and the allure of Mother Nature, Camille decided to bridge the two worlds through adventure and discovery, adopting a digital nomad life that took her across the country. The name of the blog comes from the corner in her room where Camille hung up tapestries that depicted beautiful landscapes juxtaposed against her Soho apartment. The goal of Camille's Corner is to show others that in every city, nature offers an escape, and no one has to choose only one world.
                                </p>
                                <h2 className="h6 font-weight-bold">
                                    About Camille:
                                </h2>
                                <p>
                                    Camille is a recent college graduate from UVA currently traveling from city to city exploring what urban life offers while taking advantage of any opportunity to get back to the great outdoors. Educated as a chemical engineer, Camille threw that into the wind to pursue software development and adventure. Exclusively working for new start-ups as a freelancer, she has been able to have extended stays in NYC, Denver, SF, Seattle, and Barcelona. She hopes to go next to Austin or London, but, in truth, with her, you never know where she'll be next. Known to be spontaneous and indecisive, Camille chose this life because it allows her to explore every option that life provides. She loves being a digital nomad because each new city brings new stories and opportunities. She never realized that documenting this way of life would garner such a large following for which she is grateful every day. Her goal is to promote adventures and positivity. One day she hopes to go to every national park.
                                </p>
                                <p>
                                    Her hobbies include hiking, climbing, yoga, snowboarding, and anything with music.
                                </p>
                                <p>
                                    She is a Virgo Libra cusp.
                                </p>
                                <p>
                                    <strong>Best parts of nature:</strong>
                                    <ul>
                                        <li>trees <i class="fas fa-tree"></i></li>
                                        <li>mountains <i class="fas fa-mountain"></i></li>
                                        <li>rivers <i class="fas fa-water"></i></li>
                                    </ul>
                                </p>
                                <p>
                                    <strong>Best parts of cities:</strong>
                                    <ul>
                                        <li>music <i class="fas fa-music"></i></li>
                                        <li>rooftops <i class="fas fa-glass-martini-alt"></i></li>
                                    </ul>
                                </p>
                                <div className="row d-flex justify-content-center">
                                    <div className="mx-3 my-5">
                                        <NavigateButton buttonName={blogLink} url="/blog" color="dark" />
                                    </div>
                                    <div className="mx-3 my-5">
                                        <NavigateButton buttonName={shopLink} url="/shop" color="dark" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// <div className="row">
//                 <div className="card about-card">
//                     <img src={camille} className="card-img-top"/>
//                     <div className="card-body">
//                         <h1 className="card-title">
//                         About Me
//                         </h1>
//                         <div className="card-text">
// History:

// Camille's Corner started back in the summer of 2019 when Camille first moved to NYC for an internship. Sitting behind a screen all day in the middle of a giant concrete jungle made her long for the proper outdoors. Hopelessly stuck between being drawn to the culture of cities and the allure of Mother Nature, Camille decided to bridge the two worlds through adventure and discovery, adopting a digital nomad life that took her across the country. The name of the blog comes from the corner in her room where Camille hung up tapestries that depicted beautiful landscapes juxtaposed against her Soho apartment. The goal of Camille's Corner is to show others that in every city, nature offers an escape, and no one has to choose only one world.

// About Camille:

// Camille is a recent college graduate from UVA currently traveling from city to city exploring what urban life offers while taking advantage of any opportunity to get back to the great outdoors. Educated as a chemical engineer, Camille threw that into the wind to pursue software development and adventure. Exclusively working for new start-ups as a freelancer, she has been able to have extended stays in NYC, Denver, SF, Seattle, and Barcelona. She hopes to go next to Austin or London, but, in truth, with her, you never know where she'll be next. Known to be spontaneous and indecisive, Camille chose this life because it allows her to explore every option that life provides. She loves being a digital nomad because each new city brings new stories and opportunities. She never realized that documenting this way of life would garner such a large following for which she is grateful every day. Her goal is to promote adventures and positivity. One day she hopes to go to every national park.

// Her hobbies include hiking, climbing, yoga, snowboarding, and anything with music.

// She is a Virgo Libra cusp.

// Best parts of nature: trees, mountains, and rivers

// Best parts of cities: music and rooftops

//                         </div>
//                     </div>

//                 </div>
//             </div>

export default About
