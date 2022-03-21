import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
// import ArticleList from './containers/ArticleListView';

const { Header, Content, Footer } = Layout;

const CustomLayout = props => (
    <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}>
                <Menu.Item key="1">
                   {/* <a href={`/:article/${ArticleList.id}`}>
                        Home
                    </a> */}
                </Menu.Item>
                <Menu.Item key="2">Login</Menu.Item>
                <Menu.Item key="3">Sign Up</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                {props.children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2022 Created by M Hamza</Footer>
    </Layout>
        );


export default CustomLayout;

