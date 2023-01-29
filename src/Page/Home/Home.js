import React from 'react';
import Hero from '../../comps/Hero';
import Action from '../Action/Action';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Chef from './Chef/Chef';
import CompanyDetails from './CompanyDetails/CompanyDetails';
import Find from './Find/Find';
import Gallery from './Gallery/Gallery';
import Laurel from './Laurel/Laurel';
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
            <Laurel></Laurel>
            <Gallery></Gallery>
            <Find></Find>
            <Action></Action>
            <Footer></Footer>
        </section>
    );
};

export default Home;