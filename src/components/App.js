import '../css/App.css';
import { useSelector } from 'react-redux';
import {
  FIRST_NAME_INPUT,
  LAST_NAME_INPUT,
  USERNAME_INPUT,
  EMAIL_INPUT,
  COMMENT_INPUT,
  SUBMIT
} from '../actions/formActions';

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
