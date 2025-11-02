import { Form } from 'formik'

import React from 'react'
import NewTodoForm from './NewTodoForm'
import { useTodo } from '../../context/TodoContext'




const index = () => {


  return (
    <header className="header">
        <h1>todos</h1>
       <NewTodoForm/>
    </header>
  )
}

export default index
