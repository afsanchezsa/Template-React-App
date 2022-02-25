
import React from 'react'
import { RoutesManager } from './Routes'
import "./App.css";
import { Provider } from 'react-redux';
import {ConfigureStore} from './Redux/Store'
const store=ConfigureStore()

function App() {
  return (
    <Provider store={store}>
      <main>
        <RoutesManager>



        </RoutesManager>

      </main>
      </Provider>
  );
}

export default App;
