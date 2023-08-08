

import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer.js'


function App() {
  const info = "Random"

  return (
    <div className="App">
      <Header/>
      <TaskList xyz={info}/>
      <Footer/>
    </div>
  );
}

export default App;