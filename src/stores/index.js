import ArticlesStore from './ArticlesStore';

const articles = [{id: '1', title: 'HelloWorld!', text: 'HelloWorld!'}, {id: '2', title: 'HelloWorld2!', text: 'HelloWorld2!'}, {id: '3', title: 'HelloWorld!3', text: 'HelloWorld!3'}];
export const articlesStore = new ArticlesStore(articles);