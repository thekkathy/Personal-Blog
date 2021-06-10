import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';


import '../styles/base.css';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div>
            {/* FOOTER */}
            <footer className="footer">
                <section>
                    <div className="container-fluid">
                        <div className="row py-2">
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
                        <div className="row d-flex justify-content-center mb-3 mx-2">
                            <div className="">
                                Get in touch!
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bottom-copyright">
                    <div className="text-center py-3">
                        © 2021 Camille Cooper
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer
