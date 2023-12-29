import url from 'url'
import { GLOBAL } from '../../config'

const apiUrl = GLOBAL.api || ''
const apiVer = GLOBAL.ver || ''

function apiConnect(...params: string[]) {
  const relativePath = params.join('/')
  const fullPath = url.resolve(apiUrl, apiVer) + relativePath.substring(1)

  return fullPath
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

console.log(API.students, 'GLOBAL')

export default API
