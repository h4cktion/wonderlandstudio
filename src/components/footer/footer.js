import React from 'react';

class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="section footer">
                <div className="container">
                    <div className="row footer">
                        <div className="col-lg-3 visible-lg visible-m">
                            <ul>
                                <li><h2>Site map</h2></li>
                                <li><a href="#home" className="js-scrollTo">Home</a></li>
                                <li><a href="#about" className="js-scrollTo">About</a></li>
                                <li><a href="#formations" className="js-scrollTo">Formations</a></li>
                                <li><a href="#stages" className="js-scrollTo">Stages</a></li>
                                <li><a href="#evenements" className="js-scrollTo">Evénements</a></li>
                                <li><a href="#contact" className="js-scrollTo">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-offset-1 col-lg-3 col-xs-offset-1 col-xs-10 col-sm-offset-6 col-sm-6">
                            <ul>
                                <li><h2>Sociaux</h2></li>
                                <li><a href="https://www.facebook.com/wonderlandstudio84" title="facebook Wonderland-studio"><span className="facebook social"></span>Facebook</a></li>
                                <li><a href="mailto:wonderlandstudio.84@gmail.com" ><span className="google social"></span>Google</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-offset-1 col-lg-3 visible-lg visible-m ">
                            <ul>
                                <li><h2>Contact</h2></li>
                                <li>23 rue des Lices</li>
                                <li>84000 AVIGNON</li>
                                <li>Tel: <a href="tel:+33659401041" >06.59.40.10.41</a></li>
                                <li><a href="mailto:wonderlandstudio.84@gmail.com" >wonderlandstudio.84@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12" id="copyright">
                        &copy; site réalisé par <a href="mailto:matthieu.wandolski@gmail.com" title="Contacter le web designer:  Matthieu Wandolski">Wandolski Matthieu</a>, Tous droits réservés. | 2016
                        
		</div>
                </div>
            </section>
        );
    }
}

export default Footer;