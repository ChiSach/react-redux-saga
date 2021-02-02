import { DIV } from "../contant"
import { PLUS } from "../contant"
import { START } from "../contant"

const initState = {
  count: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        count: 200
      }

    case PLUS:
      return {
        ...state,
        count: state.count + action.payload
      }

    case DIV:
      return {
        ...state,
        count: state.count - action.payload
      }

    default:
      return state
  }
}