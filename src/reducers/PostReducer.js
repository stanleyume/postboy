export default function PostReducer(state=[], action){

  switch (action.type) {
    case "NEW_POST":
      // return Object.assign({}, state, [...state, state.push({title: action.payload})]);
      return [
        ...state, {body: action.payload}
      ]
      break;
    default:
      return state;

  }
  return state;
}
