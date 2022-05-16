import React from 'react'
import store from './components/redux/Redux-store'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <App
        store={store}
        dispatch={store.dispatch.bind(store)}
        //   updatePostText={store.updatePostText.bind(store)}
        //   addMessage={store.addMessage.bind(store)}
        //   updateMessageText={store.updateMessageText.bind(store)}
      />
    </BrowserRouter>
  )
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
