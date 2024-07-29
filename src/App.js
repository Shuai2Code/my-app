//项目的根组件
const List = [{ index: 1, name: 'Vue' }]
function App() {
  const clickHandler = (name) => {
    console.log('button 被点击了', name)
  }
  return (
    <div className="App">
      <button
        type="button"
        class="btn btn-default"
        onClick={() => {
          clickHandler('jack')
        }}
      >
        button
      </button>
    </div>
  )
}

export default App
