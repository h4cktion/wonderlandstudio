import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles, onArticleClick }) => (
    <div>
        { articles.map((article, index) => (
          <Article key={index} {...article} onClick={() => onArticleClick(index)} />
        ))}
    </div>
)

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onArticleClick: PropTypes.func.isRequired
}

export default ArticleList;