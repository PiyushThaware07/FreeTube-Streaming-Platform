import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// CSS
import './index.css'
// Redux Setup
import { Provider } from 'react-redux'
import store from './Redux/store.jsx'
// Google Auth
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <GoogleOAuthProvider clientId="527837666924-09p4752vbnajp6vmpophsvak5qqtovcq.apps.googleusercontent.com">
      <Provider store={store} >
        <App />
      </Provider>
    </GoogleOAuthProvider>


  </React.StrictMode>,
)
