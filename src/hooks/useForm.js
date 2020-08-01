import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValores] = useState(valoresIniciais);

  function setValor(chave, valores) {
    setValores({
      ...values,
      [chave]: valores,
    });
  }

  function handleOnChange(evento) {
    // const { getAttribute, value } =  evento.target;
    setValor(evento.target.getAttribute('name'), evento.target.value);
  }

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    values,
    handleOnChange,
    clearForm,
  };
}

export default useForm;
