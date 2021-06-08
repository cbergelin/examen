import React, { Component } from 'react';

class Footer extends Component {

    render() {

        return (
            <footer className="footer">

                {/* Social Media Bar */}
                <div className="footer-socialmedia">
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center">                            
                            <div className="social col-md-12 text-center">
                                <a href="#"><i className="fab fa-facebook-f mr-4"></i></a>
                                <a href="#"><i className="fab fa-twitter mr-4"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in mr-4"></i></a>
                                <a href="#"><i className="fab fa-instagram mr-4"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actual Footer */}
                <div className="footer-main">

                    {/* Information */}
                    <div className="container text-center text-md-left pt-5">
                        <div className="row">
                            <div className="col-md-3 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Information</h6>
                                <hr className="footer-divider mb-2 mt-0 d-inline-block mx-auto"/>
                                <p className="mt-2">Denna hemsida är ett examensarbete gjord av Carl Bergelin. Examensarbetet är gjort under utbildningen Webutveckling mot E-handel, på Medieinstitutet Stockholm.</p>
                                <br />
                            </div>

                            {/* Kategorier */}
                            <div className="col-md-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Produkter</h6>
                                <hr className="footer-divider mb-2 mt-0 d-inline-block mx-auto"/>
                                <ul className="list-unstyled text-decoration-none">
                                    <li className="my-2"><a href="#" className="text-decoration-none text-reset">Kläder</a></li>
                                    <li className="my-2"><a href="#" className="text-decoration-none text-reset">Utrustning</a></li>
                                    <li className="my-2"><a href="#" className="text-decoration-none text-reset">Tillbehör</a></li>
                                    <br />
                                </ul>
                            </div>

                            {/* Om oss */}
                            <div className="col-md-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Länkar</h6>
                                <hr className="footer-divider mb-2 mt-0 d-inline-block mx-auto"/>
                                <ul className="list-unstyled">
                                    <li className="my-2"><a href="" className="text-decoration-none text-reset">Hem</a></li>
                                    <li className="my-2"><a href="/about" className="text-decoration-none text-reset">Om Oss</a></li>
                                    <li className="my-2"><a href="#" className="text-decoration-none text-reset">Kontakt</a></li>
                                    <li className="my-2"><a href="#" className="text-decoration-none text-reset">Jobb</a></li>
                                </ul>
                            </div>

                            {/* Kontakt */}
                            <div className="col-md-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Kontakt</h6>
                                <hr className="footer-divider mb-2 mt-0 d-inline-block mx-auto"/>
                                <ul className="list-unstyled ">
                                    <li className="my-2"><a href="#" className="text-decoration-none text-reset"><i className="fas fa-home mr-3"></i>     Märsta</a></li>
                                    <li className="my-2"><a href="#" className="text-decoration-none text-reset"><i className="fas fa-envelope mr-3"></i>     carl.bergelin@live.se</a></li>
                                    <li className="my-2"><a href="#" className="text-decoration-none text-reset"><i className="fas fa-phone mr-3"></i>     +46739398778</a></li>
                                    <br />
                                </ul>
                            </div>
                        </div>
                    </div>

                    


                </div>
            </footer>
        )
    }

}

export default Footer