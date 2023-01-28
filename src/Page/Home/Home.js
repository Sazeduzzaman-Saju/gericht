import React from 'react';
import Hero from '../../comps/Hero';
import Header from '../Header/Header';
import Chef from './Chef/Chef';
import CompanyDetails from './CompanyDetails/CompanyDetails';
import Special from './Special/Special';
import { VideoArea } from './VideoArea/VideoArea';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <Hero></Hero>
            <CompanyDetails></CompanyDetails>
            <Special></Special>
            <Chef></Chef>
            <VideoArea></VideoArea>
        </section>
    );
};

export default Home;