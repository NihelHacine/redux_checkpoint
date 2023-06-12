import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Todolist from './components/Todolist';

function App() {
  return (
    <div>
      <Header/>
      <Todolist/>
    </div>
  );
}

export default App;
