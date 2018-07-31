import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { article: props.article };
        this.save = this.save.bind(this);

    }


    save(e) {
        e.preventDefault();
        const self = this;

        self.props.save(self.state.article);
    }

    render() {
        const self = this;

        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

Modal.propTypes = {
    article: PropTypes.object,
    save: PropTypes.func,
    delete: PropTypes.func
};

export default Modal;