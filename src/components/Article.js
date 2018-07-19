import React from 'react';
import PropTypes from 'prop-types';

const Article = ({onClick, text}) => (
    <div contentEditable onClick = {onClick}>
        {text}
    </div>
)

Article.PropTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Article;