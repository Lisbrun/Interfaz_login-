import fs from 'fs'

export const jsonRead = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8')
    return JSON.parse(data)
  } catch (e) {
    console.log(e)
  }
}
