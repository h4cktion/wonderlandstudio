import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Formations from './components/formations/formations';
import Footer from './components/footer/footer';

class Main extends React.Component {
    
    constructor(props){
        super(props)
    }

    render (){
        return(
        <div>
            <Header />
            <About />
            <Formations />
            <Footer />
        </div>
        );
    }
}

export default Main;