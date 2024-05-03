// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
const blogReducer = (state = [], action) => {
  // switch(action.type)
  //  {
  //   case 'NEW_BLOG':
  //   return state.concat(action.payload)
  //   // case 'TOGGLE_IMPORTANCE'
  //   // return state
  //   default:
  //     return state
  // }
  
}

const store = createStore(blogReducer)

store.dispatch({
  type: 'NEW_BLOG',
  payload: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
  
})

store.dispatch({
  type: 'NEW_BLOG',
  payload: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})
store.dispatch({
  type: 'TOGGLE_IMPORTANCE',
  payload: {
    id: 2
  }
})

const App = () => {
  return(
    <div>
      <ul>
        {store.getState().map(note=>
          <li key={note.id}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        )}
        </ul>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
// export default App