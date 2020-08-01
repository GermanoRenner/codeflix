import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/index';
import useForm from '../../../hooks/useForm';
// import Button from '../../../components/ButtonLink';
import videosRepositorios from '../../../repositories/videos';
import categoriaRepositorios from '../../../repositories/categorias';

function CadastroNovoVideo() {
  const [categorias, setCategorias] = useState([]);
  const categoriaTitles = categorias.map(({ titulo }) => titulo);
  const { values, handleOnChange } = useForm({
    titulo: 'Código Fonte - IA vai nos substituir?',
    url: 'https://www.youtube.com/watch?v=Eegnj0mY8OY',
    categoria: '',
  });
  const history = useHistory();

  useEffect(() => {
    categoriaRepositorios.getAll()
      .then((resposta) => {
        setCategorias(resposta);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={function handlerSubmit(event) {
        event.preventDefault();
        const idCategoria = categorias.find((cat) => cat.titulo === values.categoria);
        videosRepositorios.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: idCategoria.id,
        }).then(() => {
          history.push('/');
          console.log('cadastrou!!');
        });
      }}
      >

        <FormField
          label="Titulo do vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleOnChange}
        />

        <FormField
          label="Url do vídeo"
          type="text"
          name="url"
          value={values.url}
          onChange={handleOnChange}
        />

        <FormField
          label="Categoria do vídeo"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleOnChange}
          suggestions={categoriaTitles}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>

    </PageDefault>
  );
}

export default CadastroNovoVideo;
