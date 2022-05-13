import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Components/Form';
import formSchema from './Validation/formSchema';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}
const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setUsers([ res.data, ...users ])
    })
    .catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <div className="App">
     <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit} disabled={disabled} />
     <h1>New Friends, how many of us?</h1>
     {
    users.map(user => {
       return (<div key={user.id}>
         <p>{user.username}</p>
         <p>{user.email}</p>
      </div>)
     })}
    </div>
  );
}

export default App;
