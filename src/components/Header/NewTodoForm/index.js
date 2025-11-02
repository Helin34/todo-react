import React from 'react'
import { Formik, Field,Form } from 'formik'
import validationSchema from './validations';
import { useTodo } from '../../../context/TodoContext'
import {v4 as uuidv4} from 'uuid';



const NewTodoForm = () => {
  const {addTodo}=useTodo();
  return (
     <Formik
      initialValues={{
        text: "",
        
      }}
      onSubmit={ (values,bag) => {
        console.log(values);

       addTodo(values.text);

        bag.resetForm(values);
        
      }}
      validationSchema={validationSchema}
    >
    <Form>
            <Field 
            className="new-todo" 
            placeholder="What needs to be done?" 
            autoFocus
            id="text" name="text"/>

           
       
        </Form>
        </Formik>
  );
}

export default NewTodoForm
