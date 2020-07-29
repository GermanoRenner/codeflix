import React from 'react';
import Menu from  '../../components/Menus/index'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

import dataVideo from './../../dados/dados_iniciais.json';

import './home.css';


function Home() {
  return (
    
    <div style={{background:'#141414'}}>
      <Menu /> 
      <BannerMain 
        videoTitle="Banco de Dados - SQL" 
        videoDescription='O que é um Banco de Dados Relacional? Qual sua importância?'
        url="https://www.youtube.com/watch?v=kMznyI7r2Tc">

      </BannerMain>

      <Carousel
        ignoreFirstVideo
        category={dataVideo.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dataVideo.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dataVideo.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dataVideo.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dataVideo.categorias[4]}
      />
      

      <Carousel
        ignoreFirstVideo
        category={dataVideo.categorias[5]}
      />

      <Footer />

    </div>
  );
}

export default Home;
