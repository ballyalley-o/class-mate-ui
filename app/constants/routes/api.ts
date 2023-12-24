import path from 'path'
import { GLOBAL } from '@config'

const apiUrl = GLOBAL.api || ''

function apiConnect(param: string) {
  if (!apiUrl) {
    throw new Error('apiUrl is undefined')
  }

  const apiPath = path.join(apiUrl, param)

  return apiPath
}

const API = {
  students: apiConnect('/student'),
  trainer: apiConnect('/trainer'),
  cohort: apiConnect('/cohort'),
  role: apiConnect('/role'),
  modules: apiConnect('/module'),
  // @auth
  signIn: apiConnect('/sign-in'),
  signUp: apiConnect('/sign-up'),
  signOut: apiConnect('/sign-out'),
}

export default API
