<h1>React Projects</h1>

<h2> Table of Content </h2>

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Set up](#set-up)
  - [Preview Project](#preview-project)
- [Project](#project)
- [Learning](#learning)
  - [React Hooks](#react-hooks)
    - [useState](#usestate)

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

    import Project from './project/01-useState/error-example';

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

| Topic | Project |
|---|---|
| useState | [Counter](./src/project/01-useState/Counter.jsx) |
| useState | [List](./src/project/01-useState/List.jsx) |
| useState | [Object](./src/project/01-useState/Object.jsx) |

## Learning

### React Hooks
React提供了一系列内置的Hooks，例如useState、useEffect、useContext、useReducer等

1. Hook 都用 `use` 开头
2. 需要在函数体或组件里调用


#### useState

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