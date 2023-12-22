import path from 'path'
import { GLOBAL } from '@config'

const apiUrl = GLOBAL.api

const API = {
  students: apiUrl && path.join(apiUrl, '/student'),
}

export default API
