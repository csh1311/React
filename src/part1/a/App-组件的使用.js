import React from 'react';

//定义一个组件
const Hello = () =>{
  return(
    <div>
      <p>Hello World</p>
    </div>
  )
}

// 一个组件可以被多次调用
const App = () =>{
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  )

}

// export default App
