import '../css/App.css';
import { useSelector } from 'react-redux';


function App() {
  const formData = useSelector(state => state.formData)
  return (
    <div className="App">
      <form>
        Form goes here
      </form>
    </div>
  );
}

export default App;
