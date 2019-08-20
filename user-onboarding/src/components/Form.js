import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({ errors, touched, values, status}) => {

const [users, setUsers] = useState([]);

console.log(users)

useEffect( () => {

  if (status) {
    setUsers([...users, status]);
  }

}, [status]);

  return (
    <div className="userForm">
      <Form>
        <Field
          component="input"
          type="text"
          name="firstName"
          placeholder="First Name"

        />
        {touched.firstName && errors.firstName && (
          <p className="error">{errors.firstName}</p>
        )}

        <Field
          component="input"
          type="text"
          name="lastName"
          placeholder="Last Name"

        />
        {touched.lastName && errors.lastName && (
          <p className="error">{errors.lastName}</p>
        )}

        <Field
          component="input"
          type="text"
          name="username"
          placeholder="Username"

        />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}

        <Field
          component="input"
          type="email"
          name="email"
          placeholder="Email"

        />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Password"

        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <label className="check">
          Terms of Service
          <Field
            type="checkbox"
            name="box"
            checked={values.box}
          />
        </label>

        <button>Submit</button>

      </Form>

      {users.map(user => {
        <p key={user.id}>{user.name}</p>
      })}

     </div>

  );

};


const formikOnChng = withFormik({
  mapPropsToValues({ firstName, lastName, username, email, password, box}) {

      return {
        firstName: firstName || "",
        lastName: lastName || "",
        username: username || "",
        email: email || "",
        password: password || "",
        box: box || false,

      };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("First Name is Required!"),
    lastName: Yup.string().required("Last Name is Required!"),
    username: Yup.string().required("Username is Required!"),
    email: Yup.string().required("Email is Required!"),
    password: Yup.string().required("Password is Required!"),
    box: Yup.string().required("Please Accep the Terms of Service")


  }),

  handleSubmit(values, {setStatus, resetForm}) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log("Success Message! ", res );
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log("Error Message", err))
  }

});

const UserFormWthFrmk = formikOnChng(UserForm);



export default UserFormWthFrmk
