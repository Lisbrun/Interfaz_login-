import { FireBaseConfig } from '../config/firebase-config.js'

export class Middleware {
  async decodeToken (req, res, next) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const firebase = new FireBaseConfig()
      const decodedToken = await firebase.verifyToken(token)
      console.log(decodedToken)
      console.log('user is authenticated')
      return res.json({ message: 'token invalid' })
    } catch (e) {
      console.log(e)
      return res.json({ message: 'internal server error' })
    }
  }
}

export const middleware = new Middleware()
