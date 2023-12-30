<h1>React Projects</h1>
React notes of React projects.

<h2> Table of Content </h2>

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Set up](#set-up)
  - [Preview Project](#preview-project)
- [Project](#project)
  - [useState](#usestate)
- [Learning React Hooks](#learning-react-hooks)
  - [useState](#usestate-1)
    - [异步更新](#异步更新)

## Getting Started

### Prerequisites
- **Node** Installed

### Set up

1. 克隆项目到本地
   ```sh
   git clone
   ```

2. 安装依赖
   ```sh
   npm install
   ```

3. 预览
   ```sh
   npm run dev
   ```

### Preview Project

1. 所有项目存放在 `src/project`
2. 假设要预览 `error-expample`项目，则在 `App.jsx` 中导入项目组件。更换项目只需修改导入文件路径。
    ```jsx
    // App.jsx

    import Project from './project/01-useState/Counter';

    function App() {
      return (
        <div>
          <Project />
        </div>
      );
    }

    export default App;
    ```

## Project

### useState
| Project | Description | What does it cover |
|---|---|
| [Counter](./src/project/01-useState/Counter.jsx) | useState 的基本用法 | 点击按钮简单计数 |
| [List](./src/project/01-useState/List.jsx) | 删除列表的某条记录，或者清除整个列表 | 用 `map()` 遍历数组中的每个元素，对每个元素的属性执行一定操作，返回相关的HTML元素。**使用场景**：和数据相关的列表 |
| [Object](./src/project/01-useState/Object.jsx) | 显示人物信息，信息是存放在 Obeject 中的属性 | 对 Object 使用 `useState`，需要用到展开运算符`...` |
| [StateSyncronize](./src/project/01-useState/StateSyncronize.jsx) | 状态变量是异步更新的，要获取最新的状态变量值，要用 `setValue((prevState) => { return ...; });` |

## Learning React Hooks

React提供了一系列内置的Hooks，例如useState、useEffect、useContext、useReducer等

1. Hook 都用 `use` 开头
2. 需要在函数体或组件里调用

### useState

1. `useState` 是一个函数，返回一个包含 State Value 和函数的数组：`[state value, function]`。调用时需要提供 State Value 的默认值。
   ```jsx
   console.log(useState()); // [undefined, f]
   console.loh(useState('bob')); //['bob', f]
   console.loh(useState(1)); //[1, f]
   ``` 
2. 用 Array Destructure 来获取 `useState` 返回的数组中的每个值
   ```jsx
   const [count, setCount] = useState(0);
   ```
3. State Value 会由在`set`函数中提供的值改变。每一次用 `set` 函数改变 State Value 的值时，会触发 re-render

#### 异步更新

1. State Value 是异步更新的。这意味着当调用状态更新函数时，React不会立即更新状态变量的值，而是在稍后的某个时间点进行更新。这可能会导致在异步操作中无法立即获取到最新的状态变量值。
  ```jsx
      setValue( value + 1 );
      console.log(value); // 当页面中显示 3 时，console 中只能显示 2
  ```
2. 使用回调函数确保在状态更新完成后再执行后续操作
     ```jsx
    // setValue((prevState) => {
    //  return {...prevState, value: newState};
    // })
    
    // setValue((prevState) => {
    // const newState = prevState + 1;
    // return newState; 
    // }
    
    setValye((prevState) => {
      return prevState + 1;
    })

     ```