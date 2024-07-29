import { useState } from 'react'

const Button = () => {
  const [stusent, setStudent] = useState({
    name: 'zhangsan',
    age: 18
  })
  const [count, setCount] = useState(0)
  const clickHandler = (name, e) => {
    console.log('button 被点击了', count)
    setCount(count + 1)
  }
  function changeObject() {
    setStudent({
      name: stusent.name + 's',
      age: stusent.age + 1
    })
  }
  return (
    <div>
      <button
        type="button"
        className="btn btn-default"
        onClick={(e) => {
          clickHandler('jack', e)
        }}
      >
        button-{count}
      </button>
      <br />
      <button onClick={changeObject}>
        {stusent.name}-{stusent.age}
      </button>
    </div>
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
