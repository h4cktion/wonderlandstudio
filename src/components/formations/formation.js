import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Modal from '../commons/modal';
import ContentEditable from 'react-contenteditable';

class Formation extends React.Component {



    constructor(props){
        super(props);
        
        let newState = _.cloneDeep(this.props.formation);

        this.state = {  formation: props.formation,
                        edit : false,
                        newState };

        this.onSave = this.onSave.bind(this);
        this.toogleEdit = this.toogleEdit.bind(this);
      /*   this.onInputChange = this.onInputChange.bind(this);  */
        this.onInputChangeParagraphe = this.onInputChangeParagraphe.bind(this); 
        this.onInputChangeTitle = this.onInputChangeTitle.bind(this); 
        this.onCancel = this.onCancel.bind(this); 

    }

    onSave(e){
        console.log("ok1" , e)
       
       const self = this;
       console.log("ok2", self.state.newState)

        self.props.save(self.state.newState);
        self.setState({formation : self.state.newState},
            () => {
                self.toogleEdit();
            });
    }

    onCancel(e){
        const self = this;

         self.setState({ newState : self.state.formation },
            ()=>{
                console.log("newState ", self.state.newState)
                console.log("formation ", self.state.formation)
                self.toogleEdit();
            }); 


    }

/*     onInputChange(e){
        console.log("EEEE",e.target.name)
        const self = this;
        let newState = _.cloneDeep(self.state.newState);
        let field = e.target.name;
        let value = e.target.value;

        newState[field] = value;
        self.setState({ newState }, ()=>{
            console.log(self.state.newState)
            console.log(self.state.formation)
        });
    } */

    onInputChangeTitle(e) {
        const self = this;

        let newState = _.cloneDeep(self.state.newState);
        let field = "titre";
        let value = e.target.value;

        newState[field] = value;
        self.setState({ newState }, () => {
            console.log(self.state.formation)
        });
    }

    onInputChangeParagraphe(e) {
        const self = this;

        let newState = _.cloneDeep(self.state.newState);
        let field = "paragraphe";
        let value = e.target.value;

        newState[field] = value;
        self.setState({ newState }, () => {
            console.log(self.state.formation)
        });
    }

    toogleEdit(){
        const self = this;
        let edit = _.cloneDeep(self.state.edit);
         (edit) ? edit = false : edit = true;
        
        self.setState({ edit },
        ()=>{
            console.log("toogleEdit : ",self.state.edit)
        });
    }

    render() {
        const self = this; 
        
        if(self.state.edit){
            return (

                <div className={self.props.cssClass}>

                    <img className="col-lg-2 col-m-1 col-sm-1 col-xs-offset-1 col-xs-2" src={self.state.newState.img} width="80" height="80" alt="chant" />
                    {/* <input type="text" value={self.state.newState.titre} name="titre" onChange={self.onInputChange }/> */}
                   {/*  <h1 className="col-lg-offset-1  col-lg-9 col-m-offset-1 col-m-8 col-sm-offset-1 col-sm-5 col-xs-offset-1 col-xs-7 black"
                        name="titre" onChange={self.onInputChange} contentEditable='true' onInput={self.onInputChange} >
                        {self.state.newState.titre}
                    </h1> */}

                    <ContentEditable
                        className="col-lg-offset-1  col-lg-9 col-m-offset-1 col-m-8 col-sm-offset-1 col-sm-5 col-xs-offset-1 col-xs-7 black"
                        id="titre"
                        html={self.state.newState.titre} // innerHTML of the editable div
                        disabled={false}       // use true to disable edition
                            onChange={this.onInputChangeTitle} // handle innerHTML change
                    />
                    <ContentEditable
                        className="col-sm-12 col-xs-offset-1 col-xs-10"
                        id="paragraphe"
                        html={self.state.newState.paragraphe} // innerHTML of the editable div
                        disabled={false}       // use true to disable edition
                        onChange={this.onInputChangeParagraphe} // handle innerHTML change
                    />
                    
                    {/* <p contentEditable='true' name="paragraphe" onChange={self.onInputChange} onInput={self.onInputChange}
                        className="col-sm-12 col-xs-offset-1 col-xs-10"
                        dangerouslySetInnerHTML={{ __html: self.state.newState.paragraphe }}  /> */}
                    {/* <textarea style={{ height: '200px' }} 
                        className="col-sm-12 col-xs-offset-1 col-xs-10"
                        value={self.state.newState.paragraphe} name="paragraphe" onChange={self.onInputChange}  /> */}
                    <button className="btn " onClick={ self.onCancel } >Cancel</button>
                    <button className="btn " onClick={ self.onSave } >Save</button>
                </div>
            );
        }else {
            return (

                <div className={self.props.cssClass} onClick={ self.toogleEdit } >


                    <img className="col-lg-2 col-m-1 col-sm-1 col-xs-offset-1 col-xs-2" src={self.state.formation.img} width="80" height="80" alt="chant" />
                    <h1 className="col-lg-offset-1  col-lg-9 col-m-offset-1 col-m-8 col-sm-offset-1 col-sm-5 col-xs-offset-1 col-xs-7 black" key={Date()}>
                        {self.state.formation.titre}
                    </h1>
                    <p
                        className="col-sm-12 col-xs-offset-1 col-xs-10"
                        dangerouslySetInnerHTML={{ __html: self.state.formation.paragraphe }} key={Date() + 1}/>

                </div>
            );
        }
        
    }
}

Formation.propTypes = {
    formation: PropTypes.object.isRequired,
    save: PropTypes.func.isRequired
};

export default Formation;