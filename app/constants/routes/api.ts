import path from 'path'
import { GLOBAL } from '@config'

const apiUrl = GLOBAL.api || ''

function apiConnect(...params: string[]) {
  if (!apiUrl) {
    throw new Error('apiUrl is undefined')
  }

  const apiPath = path.resolve(apiUrl, ...params)

  return apiPath
}

const API = {
  students: apiConnect('/student'),
  trainer: apiConnect('/trainer'),
  cohort: apiConnect('/cohort'),
  role: apiConnect('/role'),
  modules: apiConnect('/module'),
  // @auth
  signIn: apiConnect('/auth', 'sign-in'),
  signUp: apiConnect('/auth', 'sign-up'),
  signOut: apiConnect('/auth', 'sign-out'),
}

console.log(API.signIn)

export default API
