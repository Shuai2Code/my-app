import { useState } from 'react'

const Button = () => {
  const [count, setCount] = useState(0)
  const clickHandler = (name, e) => {
    console.log('button 被点击了', count)
    setCount(count + 1)
  }
  return (
    <button
      type="button"
      className="btn btn-default"
      onClick={(e) => {
        clickHandler('jack', e)
      }}
    >
      button-{count}
    </button>
  )
}

//项目的根组件

function App() {
  return (
    <div className="App">
      <Button></Button>
    </div>
  )
}

export default App
