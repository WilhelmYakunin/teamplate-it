import { useCallback } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const teamplate = useCallback(async () => {
    const url = `http://localhost:${__SERVER_PORT__}/createTemplate`
    const data = await axios.get(url)
    console.log(data)
  }, [])
  return (
    <div className="App">
      <button onClick={teamplate}>template</button>
    </div>
  )
}

export default App
