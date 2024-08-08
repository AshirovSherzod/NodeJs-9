import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import {store} from './context'
const App = lazy(() => import("./App"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
