import React, { Component } from 'react';
import { deleteArticle } from './AC/articles'

class Article extends Component {
  render() {
    const { article: { title, text} } = this.props;
    return (
      <div>
        <h1>{ title }</h1>
        <section>{text}</section>
        <button onClick = {this.handleClick}>Delete</button>
      </div>
    )
  }

  handleClick = (e) => {
    e.preventDefault();
    deleteArticle(this.props.article.id);
    console.log('@@@ delete', this.props.article.id);
  }
}

export default Article;