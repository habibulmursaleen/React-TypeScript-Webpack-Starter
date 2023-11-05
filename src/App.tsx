import { Counter } from './Counter'
import js from './js.png'

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img src={js} alt="logo"></img>
      <Counter />
    </>
  )
}
