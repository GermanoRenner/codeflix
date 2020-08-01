import configs from '../configs/index';

const URL_CATEGORIAS = `${configs.URL_SERVER}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIAS}`)
    .then(async (resposta) => {
      if (resposta.ok) {
          const resp = await resposta.json();
          console.log('asdadsadasd', resp);
        return resp;
      }

      throw new Error('Erro ao obter resposta do servidor.');
    });
}

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIAS}/?_embed=videos`)
    .then(async (resposta) => {
      if (resposta.ok) {
          const resp = await resposta.json();
          console.log('asdadsadasd', resp);
        return resp;
      }

      throw new Error('Erro ao obter resposta do servidor.');
    });
}

export default {
  getAllCategoriesWithVideos,
  getAll,
};
