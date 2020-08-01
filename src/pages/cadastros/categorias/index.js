import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/ButtonLink';
import useForm from '../../../hooks/useForm';

function CadastroCategorias() {
  const valor = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);
  const { values, handleOnChange, clearForm } = useForm(valor);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8080/categorias')
        .then(async (resposta) => {
          const respCat = await resposta.json();
          setCategorias([
            ...respCat,
          ]);
        });
    }, 2000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categorias:
        {values.nome}
      </h1>
      <form onSubmit={function handlerSubmit(evento) {
        evento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm(valor);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleOnChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleOnChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleOnChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      { categorias.length === 0
        && (
          <div>
            Carregando...
          </div>
        ) }
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.titulo}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategorias;
