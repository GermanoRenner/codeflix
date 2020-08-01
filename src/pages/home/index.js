import React, { useState, useEffect } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepositories from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault/index';
import './home.css';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepositories.getAllCategoriesWithVideos()
      .then((resposta) => {
        console.log('bbbbbb', resposta);
        setDadosIniciais(resposta);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <PageDefault paddingAll={0}>

        {dadosIniciais.length === 0 && (<div>Carregando... </div>)}

        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  videoDescription="O que é um Banco de Dados Relacional? Qual sua importância?"
                  url={dadosIniciais[0].videos[0].url}
                />

                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </>
            );
          }

          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}

        {/* <BannerMain
          videoTitle="Banco de Dados - SQL"
          videoDescription="O que é um Banco de Dados Relacional? Qual sua importância?"
          url="https://www.youtube.com/watch?v=kMznyI7r2Tc"
        />

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
        /> */}

      </PageDefault>

    </div>
  );
}

export default Home;
