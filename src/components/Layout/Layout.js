import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Navbar from '../Navbar';
import Section from '../Section';
import Header from '../Header';
import News from '../News';
import NewsDetail from '../NewsDetail';
import TopPage from '../TopPage';

function Layout() {
    const routes = [
        {
          path: "/",
          exact: true,
          sidebar: () => <div>Home!</div>,
          main: () => <TopPage />
        },
        {
          path: "/contact",
          sidebar: () => <div>Contact!</div>,
          main: () => <Contact/>
        },
        {
          path: "/about",
          sidebar: () => <div>About!</div>,
          main: () => <About/>
        },
        {
                path: "/news/:name",
                sidebar: () => <div>News!</div>,
                main: () => <NewsDetail/>
        },
        {
            path: "/news",
            sidebar: () => <div>News!</div>,
            main: () => <News />
        },
        {
            path: '*',
            sidebar: () => <div>Home!</div>,
            main: () => <TopPage />
        }
      ];

    return (
        <>
            <Navbar/>
            <Header routes={routes}/>
            <Section routes={routes}/>
        </>
    )
}

export default Layout;