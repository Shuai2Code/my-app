const Button = () => {
  const clickHandler = (name, e) => {
    console.log('button 被点击了', name, e)
  }
  return (
    <button
      type="button"
      className="btn btn-default"
      onClick={(e) => {
        clickHandler('jack', e)
      }}
    >
      button
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
