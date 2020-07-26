export const addTask = task => {
  return {
    type: 'ADD_TASK',
    payload: task
  }
}

export const removeTask = id => {
  return {
    type: 'REMOVE_TASK',
    payload: id
  }
}

export const editTask = id => {
  return {
    type: 'EDIT_TASK',
    payload: id
  }
}

export const viewTask = id => {
  return {
    type: 'VIEW_TASK',
    payload: id
  }
}