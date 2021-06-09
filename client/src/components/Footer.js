import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';


import '../styles/base.css';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div>
            {/* FOOTER */}
            <footer className="footer p-4">
                <section>
                    <div className="container-fluid border-bottom">
                        <div className="row">
                            <div className="container d-flex justify-content-center mt-4">
                                <Link to="">
                                    <button className="btn-icon icon-light mx-1">
                                        <i class="far fa-envelope fa-lg"></i>
                                    </button>
                                </Link>
                                <Link to="">
                                    <button className="btn-icon icon-light mx-1">
                                        <i class="fas fa-phone fa-lg"></i>
                                    </button>
                                </Link>
                                <Link to="">
                                    <button className="btn-icon icon-light mx-1">
                                        <i class="fab fa-facebook fa-lg"></i>
                                    </button>
                                </Link>
                                <Link to="">
                                    <button className="btn-icon icon-light mx-1">
                                        <i class="fab fa-instagram fa-lg"></i>
                                    </button>
                                </Link>
                                <Link to="">
                                    <button className="btn-icon icon-light mx-1">
                                        <i class="fab fa-twitter fa-lg"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center mb-5 mt-2">
                            <div className="">
                                Get in touch!
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center pt-4">
                    © 2021 Camille Cooper
                </div>
            </footer>
        </div>
    )
}

export default Footer
