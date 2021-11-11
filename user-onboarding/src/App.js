import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Components/Form';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  termsOfService: false,
}

function App() {
  return (
    <div className="App">
     <Form />
    </div>
  );
}

export default App;
