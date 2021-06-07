import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* FOOTER */}
            <footer className="footer p-4">
                <section className="border-bottom">
                    <div className="container-fluid">
                        <div className="row d-flex">
                            <div className="col-4 my-4">
                                <h6 className="text-uppercase mb-3 footer-header">
                                    Blog
                            </h6>
                                <div>
                                    <i className="fas fa-home me-3" />
                                    <div>
                                        <div>601 South Oak Street</div>
                                        <div>Falls Church, Virginia</div>
                                        <div>22046</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-5 my-4">
                                <h6 className="text-uppercase mb-4">
                                    Contact Us
                            </h6>
                                <p><i className="fas fa-phone me-3"></i> (703) 248-5661</p>
                                <p><i className="fas fa-phone me-3"></i> (703) 248-5666</p>
                                <p><i className="fas fa-envelope me-3"></i> info@tjschool.org</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center pt-4">
                    © 2021 Thomas Jefferson Elementary School
            </div>
            </footer>
        </div>
    )
}

export default Footer
