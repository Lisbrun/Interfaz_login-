import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyAsdHnUrBcgQ2UwUo8VGOxcxQZgeV5T5Fo',
  authDomain: 'test-login-709b9.firebaseapp.com',
  projectId: 'test-login-709b9',
  storageBucket: 'test-login-709b9.appspot.com',
  messagingSenderId: '524447640973',
  appId: '1:524447640973:web:de6df746ea3fb7fab061c4',
  measurementId: 'G-50R50RXC51'
}
// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig)
getAnalytics(firebaseApp)
