import * as ActionTypes from '../../actions/dogActions/types'

const initialState = {
  url: '',
  loading: false,
  error: false,
  errorMsg: ''
}

export const dogReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.REQUESTED_DOG:
      return {
        url: '',
        loading: true,
        error: false,
      }

    case ActionTypes.REQUESTED_DOG_SUCCEEDED:
      return {
        url: action.data,
        loading: false,
        error: false,
      }

    case ActionTypes.REQUESTED_DOG_FAILED:
    return {
      url: '',
      loading: false,
      error: true,
      errorMsg: action.error
    }

    default:
      return state
  }
}