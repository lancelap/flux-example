import React, { Component } from 'react';
import Article from './Article';

class ArticlesList extends Component {
  render() {
    const articleElements = this.props.articles.map((article) => <li key={article.id}>
      <Article article = {article} />
    </li>);

    return (
      <div>
        { articleElements }
      </div>
    )
  }
}

export default ArticlesList;