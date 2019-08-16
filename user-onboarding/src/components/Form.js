import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = () => {

const [users, setUserss] = useState([]);

console.log(users)

useEffect( () => {



}


)

  return (
    <div className="userForm">
      <Form>
        <Field
          component="input"
          type="text"
          name="firstName"
          placeholder="First Name"

        />

        <Field
          component="input"
          type="text"
          name="lastName"
          placeholder="Last Name"

        />

        <Field
          component="input"
          type="text"
          name="username"
          placeholder="Username"

        />

        <Field
          component="input"
          type="email"
          name="email"
          placeholder="Email"

        />

        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Password"

        />

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
        <p key={user.name}>{user.username}</p>
      })};

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

      }
  }

validationSchema: Yup.object().shape({
  firstName: Yup.string().required("First Name is Required!"),
  lastName: Yup.string().required("Last Name is Required!"),
  username: Yup.string().required("Username is Required!"),
  email: Yup.string().required("Email is Required!"),
  password: Yup.string().required("Password is Required!"),
  box: Yup.string().required("Please Accep the Terms of Service")


})

  }
)



export default UserForm
