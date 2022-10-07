import React from 'react';

//定义一个组件，接受参数
const Hello = (props) =>{
  return(
    <div>
      <p>Hello World {props.name} is {props.age}</p>
    </div>
  )
}

// 一个组件可以被多次调用
//传递参数给组件中
//如果props值是javaScript来实现的，需要加上{}
const App = () =>{
  const name = "张三";
  const age = 20;
  const names = "lisi";
  const ages = 22;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="李四" age="10" />
      <Hello name="liming" age="10" />
      {/* 下面是 props值是javaScript来实现的*/}
      <Hello  name={name} age={age} />
      <Hello name={names} age={ages+age} />
    </div>
  )

}

// export default App
