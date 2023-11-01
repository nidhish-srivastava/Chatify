import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/HomePage'
import './App.css'
import bg from './assets/bg.png'
import ChatPage from './pages/ChatPage'

function App() {
  return (
    <div className='App'>
      <div className="bg-image">
        <img src={bg} alt="bg-img" loading='lazy'/>
    <Routes>
      <Route path='/' exact element = {<Homepage/>}/>
      <Route path='/chats' element = {<ChatPage/>}/>
    </Routes>
      </div>
    </div>
  )
}

export default App