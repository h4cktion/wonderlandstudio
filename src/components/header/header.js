import React from 'react';

class Header extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <header className="header" id="home">
                <div className="container">

                    <div className="row">
                        <a href="#" className="header-logo col-lg-2 col-m-2 col-sm-4 col-xs-4">

                            <img src="dist/images/ws.png" width="200" height="200" />
                        </a>
                        <nav className="menu">
                            <div id="menu-text" className="visible-lg  col-lg-offset-2 col-lg-8">
                                <a href="#about" className="menu-item js-scrollTo" >ABOUT</a>
                                <a href="#formations" className="menu-item js-scrollTo">FORMATIONS</a>
                                <a href="#stages" className="menu-item js-scrollTo">STAGES</a>
                                <a href="#evenements" className="menu-item js-scrollTo">EVENTS</a>
                                <a href="#contact" className="menu-item js-scrollTo">CONTACT</a>
                            </div>

                            <div id="menu-burger" className="visible-sm visible-xs visible-m col-m-offset-9 col-m-1 col-sm-offset-6 col-sm-2 col-xs-offset-6 col-xs-2">
                                <img id="img-menu-burger" src="dist/images/icon-menu.png" width="40" height="40" style={{display:'block'}} className="dropbtn" />

                            </div>
                            <div className="dropdown col-m-offset-7 col-m-5 col-sm-offset-6 col-sm-6 col-xs-12">
                                <div id="myDropdown" className="dropdown-content hide">
                                    <a href="#about" className="js-scrollTo" >ABOUT</a>
                                    <a href="#formations" className="js-scrollTo">FORMATIONS</a>
                                    <a href="#stages" className="js-scrollTo">STAGES</a>
                                    <a href="#evenements" className="js-scrollTo">EVENTS</a>
                                    <a href="#contact" className="js-scrollTo">CONTACT</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="row ">
                        <h1 className="header-baseline">
                            <div className="header-baseline-l header-baseline-l1 col-lg-12 col-xs-12">Wonderland Studio</div>
                            <div className="header-baseline-l header-baseline-l2 col-lg-12 col-xs-12">CHANT / ARTS PLASTIQUES / PIANO</div>
                            <div className="header-baseline-l header-baseline-l3 col-lg-12 col-xs-12">Cours de chant & piano à Avignon</div>
                        </h1>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;