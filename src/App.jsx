import './App.css'
import Blogs from './components/header/Blogs'
import Bookmarks from './components/header/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
 

  return (
    <>
      <Header></Header>
     <div>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
     </>
  )
}

export default App
