import React, { Component } from 'react';
import ArticlesList from './ArticlesList';
import { articlesStore } from './stores';

class ArticlesListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: articlesStore.getAll()
    }
  }

  componentDidMount() {
    articlesStore.addChangeListener(this.handleChange)
  }

  componentWillMount() {
    articlesStore.removeChangeListener(this.handleChange)
  }

  render() {
    return <ArticlesList articles={this.state.articles}/>
  }

  handleChange = () => {
    this.setState({
      articles: articlesStore.getAll()
    })
  }
}

export default ArticlesListContainer;