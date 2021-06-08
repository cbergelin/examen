import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from '../Button'

class Navbar extends Component {
    state = { clicked:false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        
        return (
            <nav className="navbar">
                <div className="container">
                    {/* <div className="row"> */}
                        <div className="col d-flex justify-content-start my-2">
                            <h1 className="navbar-logo"><i className="fas fa-fist-raised"></i></h1>
                            <div className="menu-icon d-md-none d-flex align-items-center mt-2" onClick={this.handleClick}>                    
                                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                            </div>
                            </div>
                        <div className="col-6 d-flex justify-content-center my-2">

                            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                                {MenuItems.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a className={item.cName} href={item.url}>
                                                {item.title}
                                            </a>                                 
                                        </li>                             
                                    )
                                })}                                      
                            </ul>

                        </div>
                        <div className="col d-flex justify-content-end my-2">
                            <ul className='nav-icons'>
                                {MenuItems.map((item, index) => {
                                    return (
                                        <li className="pr-5" key={index}>
                                            <p className={item.svgName}></p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    {/* </div> */}
                </div>
            </nav>

        )
    }
}

export default Navbar