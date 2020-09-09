
const optionsReducer = (state, action) => {
  switch(action.type) {
    case 'POPULATE_OPTIONS':
      return action.options
    case 'ADD_OPTION':
      return [...state, action.option]
    case 'DELETE_OPTION':
      return state.filter((option) => action.option !== option)
    case 'DELETE_OPTIONS':
      return []
    default:
      return state
  }
};

export default optionsReducer;