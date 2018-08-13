import * as ActionsTypes from './types'

export const requestDog = () => ({
  type: ActionsTypes.REQUESTED_DOG
})

export const requestDogSuccess = (data) => ({
  type: ActionsTypes.REQUESTED_DOG_SUCCEEDED,
  data: data.message
})

export const requestDogError = (error) => ({
  type: ActionsTypes.REQUESTED_DOG_FAILED,
  error
})

export const fetchDog = () => ({
  type: ActionsTypes.FETCHED_DOG
})