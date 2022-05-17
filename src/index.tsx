import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './components/redux/Redux-store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
