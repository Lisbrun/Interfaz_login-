import { useEffect } from 'react'
import axios from 'axios'
// eslint-disable-next-line react/prop-types
export function ListTodo({ Token }) {
  useEffect(() => {
    if(Token){
      fetchData(Token)
    }
  }, [Token])

  const fetchData = async (Token) => {
    const res = await axios.get('http://localhost:3000/api', {
      headers: {
        Authorization: `Bearer ${Token}`
      }
    })
    console.log(res)
  }

  return (
    <div>
      <h1>List of To do</h1>
    </div>
  )
}
