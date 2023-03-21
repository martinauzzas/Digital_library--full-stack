// NOTES
// To write plain JS you need to put it in curly brakets 

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import routes from './config/routes';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import { store } from './redux/slices/store';

import AuthChecker from './auth/AuthChecker';

// Created the routes ('./config/routes) in a variable so we can then map over them with JS in our function App


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Provider store = { store }>
          <Routes>
            { routes.map((route, index) => (
              <Route
              key = { index }
              path = { route.path }
              element = {
                route.protected ? (
                <AuthChecker>
                  <route.component />
                </AuthChecker>
                ) : (
                  <route.component />
                )
                  }
                  />
            )) }
          </Routes>
        </Provider>
    </BrowserRouter>
      
    
  )
}
export default App
