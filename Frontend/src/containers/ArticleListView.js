import React, { Component } from 'react';
import axios from 'axios';
import Articles from '../components/Article';


class ArticleList extends Component {
    state = {
        articles: [],
    };

    fetchArticles = () => {
        axios.get('http://127.0.0.1:8000/api/').then((res) => {
            this.setState({
                articles: res.data,
            });
        });
    }

    componentDidMount() {
        this.fetchArticles();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            this.fetchArticles();
        }
    }


    render() {
        return (
            <div>
                <Articles data={this.state.articles} /> <br />
                <h2> What you did today  </h2>

            </div>


        );
    }
}

export default ArticleList;
