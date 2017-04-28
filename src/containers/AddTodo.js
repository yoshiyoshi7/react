import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <TextField 
        id="todo-title"
        ref={node => {
          input = node.input
        }} />
        <RaisedButton type="submit" label="Add Todo"/>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
