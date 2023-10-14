import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// CSS
import './index.css'
// Redux Setup
import { Provider } from 'react-redux'
import store from './Redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
)
