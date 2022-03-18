import React, { Component } from 'react';
import 'antd/dist/antd.css';
// import { BrowserRoutes as Router } from 'react-router-dom';
// import BaseRouter from './routes';


import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleListView';


class App extends Component {
    state = { loading: true };

    render() {
        return (
            <div className="App">

                <CustomLayout>
                    <ArticleList />
                </CustomLayout>

            </div>
        );
    }
}

export default App;
