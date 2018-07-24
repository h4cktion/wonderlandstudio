import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Formations from './components/formations/formations';

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
        </div>
        );
    }
}

export default Main;