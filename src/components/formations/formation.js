import React from 'react';
import _ from 'lodash';

class Formation extends React.Component {

    constructor(props){
        super(props);
        this.state = { formation: props.formation };
    }

    render() {
        const self = this; 

        return (
            <div className={ self.props.cssClass } >
                <img className="col-lg-2 col-m-1 col-sm-1 col-xs-offset-1 col-xs-2" src={ self.state.formation.img } width="80" height="80" alt="chant" />
                <h1 className="col-lg-offset-1  col-lg-9 col-m-offset-1 col-m-8 col-sm-offset-1 col-sm-5 col-xs-offset-1 col-xs-7 black">{ self.state.formation.titre }</h1>
                <p className="col-sm-12 col-xs-offset-1 col-xs-10" dangerouslySetInnerHTML={{__html: self.state.formation.paragraphe}} />            
            </div>
        );
    }
}

export default Formation;