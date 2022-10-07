import React from 'react';


//练习1
// const App = () =>{
//   //课程名
//   const course = 'Half Stack application development'
//   //react基础知识
//   const part1 = 'Fundamentals of React'
//   //练习分数
//   const exercises1 = 10
//   //使用props传递参数
//   const part2 = 'Using props to pass data'
//   //练习分数
//   const exercises2 = 7
//   //组件状态
//   const part3 = 'State of a component'
//   //练习分数
//   const exercises3 = 14
//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>{part1} {exercises1}</p>
//       <p>{part2} {exercises2}</p>
//       <p>{part3} {exercises3}</p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }


//练习2
//将练习1的内容转换成三个组件

/**
 * 
 * 注意：
 *1. @param {*} props 
 * 是props不是prop
 * 如果写成prop会出现报错
 * 报错'prop' is not defined
 * 
 * 2.组件首字母需要大写，要不然会跟react ui冲突会使用react ui
 * 而不会使用自定义组件
 * 
 * 3.return() 括号里面必须有一个根元素
 * 可以写成return(<div>
 * 
 * </div>)
 * 或return([.....])或使用return(<>.......</>)
 * 
 */

//定义第一个组件
const Header = (props) =>{
  return(
    <>
    <h1>{props.course}</h1>
    </>
  )
}

//定义第二个组件
const Content = (props) =>{
  return (
    <>
    <p>{props.part} {props.exercises}</p>
    </>
  )
}

//定义第三个组件统计练习次数

const Total = (props) =>{
  return(
    <>
    <p>Number of exercises {props.total}</p>
    </>
  )
}


const App = () =>{
  //课程名
  const course = 'Half Stack application development'

    //react基础知识
  const part1 = 'Fundamentals of React'
  //练习分数
  const exercises1 = 10
  //使用props传递参数
  const part2 = 'Using props to pass data'
  //练习分数
  const exercises2 = 7
  //组件状态
  const part3 = 'State of a component'
  //练习分数
  const exercises3 = 14
  return(
    <>
    <Header course={course} />
    <Content part={part1} exercises={exercises1} />
    <Content part={part2} exercises={exercises2} />
    <Content part={part3} exercises={exercises3} />
    <Total total={exercises1+exercises2+exercises3} />
    </>
  )
}



// export default App
