import React from 'react';
// const App = () =>(
//   <div>
//     <p>Hello world</p>
//   </div>
// )
// export default App;

//定义一个自定箭头函数
//箭头函数没有自己的this
const App = () => {
  // console.log('Hello from component')
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Hello world {now.toString()}</p>
      <p>{a} plus {b}is {a+b}</p>
    </div>
  )
}

// 挂载到全局
// export default App;
