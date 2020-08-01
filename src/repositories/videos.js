import configs from '../configs/index';

const URL_VIDEOS = `${configs.URL_SERVER}/videos`;

function create(payload) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (resposta) => {
      if (resposta.ok) {
        const resp = await resposta.json();
        return resp;
      }

      throw new Error('Erro ao obter resposta do servidor.');
    });
}

export default {
  create,
};
