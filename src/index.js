import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import CadastroNovoVideo from './pages/cadastros/videos'
import CadastroCategorias from './pages/cadastros/categorias';



const Pagina404 = () => (<div><h1>Página 404 - Not Found</h1></div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path = '/' component={Home} exact/>
      <Route path = '/cadastro/video' component={CadastroNovoVideo} />
      <Route path = '/cadastro/categoria' component={CadastroCategorias} />
      <Route component={Pagina404}/>
      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
