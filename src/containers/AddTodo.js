import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

let AddTodo = ({ dispatch }) => {
  let inText

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!inText.input.value.trim()) {
          return
        }
        dispatch(addTodo(inText.input.value))
        inText.input.value = ''
      }}>
        <TextField 
        id="todo-title"
        ref={node => {
          inText = node
        }} />
        <RaisedButton type="submit" label="Add Todo"/>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
