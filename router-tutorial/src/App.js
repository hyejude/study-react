import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/profiles/:username' element={<Profile />} />
      <Route path='/articles' element={<Articles />}>
        <Route path=':id' element={<Article />} />
      </Route>
      {/* <Route path='/articles/:id' element={<Article />} /> */}
    </Routes>
  )
}

export default App;