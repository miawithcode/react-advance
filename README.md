<h1>React Projects</h1>
React notes of React projects.

<h2> Table of Content </h2>

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Set up](#set-up)
  - [Preview Project](#preview-project)
- [Project](#project)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [Conditional Rendering](#conditional-rendering)
  - [Forms](#forms)
  - [useRef](#useref)
- [Learning](#learning)
  - [useState](#usestate-1)
  - [onClick](#onclick)
  - [useEffect](#useeffect-1)
  - [Fetch Data](#fetch-data)
  - [Fetch Error](#fetch-error)
  - [Condition](#condition)
  - [Short Circuit](#short-circuit)
  - [Ternary Operator](#ternary-operator)
  - [Leverage JavaScript](#leverage-javascript)
  - [Input](#input)

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
|---|---|---|
| [Counter](./src/project/01-useState/Counter.jsx) | useState 的基本用法 | 点击按钮简单计数 |
| [List](./src/project/01-useState/List.jsx) | 删除列表的某条记录，或者清除整个列表 | 用 `map()` 遍历数组中的每个元素，对每个元素的属性执行一定操作，返回相关的HTML元素。**使用场景**：和数据相关的列表 |
| [Object](./src/project/01-useState/Object.jsx) | 显示人物信息，信息是存放在 Obeject 中的属性 | 对 Object 使用 `useState`，需要用到展开运算符`...` |
| [StateSyncronize](./src/project/01-useState/StateSyncronize.jsx) |  | 状态变量是异步更新的，要获取最新的状态变量值，要用 `setValue((prevState) => { return ...; });` |

### useEffect

| Project | Description | What does it cover |
|---|---|---|
| [Fetch Data](./src/project/02-useEffect/FetchData.jsx) | 从 GitHub API 中获取数据加载用户列表 | 用 `useEffect` 从 API 中 fetch 数据|
| [Cleanup Function](./src/project/02-useEffect/CleanupFucntion.jsx) |  | 在一个组件中加载另一个有 `useEffect` 的组件时，即使设置了 `useEffect` 只在页面加载的时候执行一次，但从第一个组件中有条件地加载这个组件时，`useEffect` 在组件显示的每一次都会执行，设置 Cleanup 函数让组件不显示时，停止执行 `useEffect` 中的操作 |

### Conditional Rendering

| Project | Description | What does it cover |
|---|---|---|
| [Multiple Returns](./src/project/03-conditional-rendering/MultipleReturns.jsx) | 加载数据时显示 Loading，数组加载完成后显示数据 | useEffect 的 common use |
| [Short Circuit](./src/project/03-conditional-rendering/ShortCircuit.jsx) | 控制页面中显示的内容 | JSX 中不能用 `if`条件句判断显示什么内容，但可以用 `\|\|` 和 `&&` 做条件判断 |
| [Ternary Operator](./src/project/03-conditional-rendering/TernaryOperator.jsx) | 控制页面中显示的内容 | 用 `condition?expression1:expression2`做条件判断动态显示页面元素 |
| [Toggle Component](./src/project/03-conditional-rendering/ToggleComponent.jsx) | 点击按钮显示组件，再次点击按钮不显示组件 |  |
| [User](./src/project/03-conditional-rendering/User.jsx) | 用户登录时显示登出按钮和问好信息，用户登出时显示登录提示信息和登录按钮 |  |

### Forms
| Project | Description | What does it cover |
|---|---|---|
| [Controlled Inputs](./src/project/05-forms/ControlledInputs.jsx) |  | 提到 Controlled Inputs 的时候，说明有一个状态变量，代表所有的 input，或者每一个 input 都有对应的状态变量，改变 input 中的值时，会自动改变状态变量中的值，input 也会反映状态变量中的值 |
| [Add User](./src/project/05-forms/AddUser.jsx) | 点击提交按钮添加 input 中输入的 user name，以及移除 user |  |
| [Multiple Inputs](./src/project/05-forms/MultipleInputs.jsx) |  | setup one state value for multiple inputs，将状态变量设置成一个 object |
输入的 user name，以及移除 user |  |
| [Checkbox Inputs](./src/project/05-forms/CheckboxInput.jsx) |  | 设置 `checked` 属性为状态变量 |
| [Select Inputs](./src/project/05-forms/CheckboxInput.jsx) |  | 设置 `value` 属性为状态变量，选项中的内容通常来自 API |
| [Uncontrolled Inputs (FormData)](./src/project/05-forms/FormData.jsx) | FormData 是用来轻松收集和发送表单数据的一种方式，使用 FormData 的好处是不需要手动读取每个表单元素的值 | 使用 FormData 时，input 必须有 `name` 属性 |

### useRef
| Project | Description | What does it cover |
|---|---|---|
| [Uncontrolled Inputs (useRef)](./src/project/06-useRef/UncontrolledInput.jsx) | 用 useRef 来获取 input 中的值 | `refContainer` 会 access 到 input，JavaScript 中可以用 `.value` 来获取 input 中的值 ｜
| [Avoid Functionality](./src/project/06-useRef/AvoidFunctionality.jsx) | 通过改变 useRef 的值，在 initial render 之后不再运行某个功能（在 initial render 时不运行，initial render 后运行） | 因为 useRef 的值是一个 Object，如果要检查 true 或 false，要用到 `current` 属性 ｜
| [Input Focus](./src/project/06-useRef/InputFocus.jsx) | 页面初始加载时就将 input 设置为 focus状态 |  ｜

## Learning

React 提供了一系列内置的 Hooks，例如 useState、useEffect、useContext、useReducer等

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
4. State Value 是异步更新的。这意味着当调用状态更新函数时，React不会立即更新状态变量的值，而是在稍后的某个时间点进行更新。这可能会导致在异步操作中无法立即获取到最新的状态变量值。
    ```jsx
        setValue( value + 1 );
        console.log(value); // 当页面中显示 3 时，console 中只能显示 2
    ```
5. 要获取最新的状态变量的值，则使用回调函数确保在状态更新完成后再执行后续操作：
    ```jsx
    // setValue((prevState) => {
    //  return {...prevState, value: newState};
    // })
    
    // setValue((prevState) => {
    // const newState = prevState + 1;
    // return newState; 
    // }
    
    setValue((prevState) => {
      return prevState + 1;
    })
    ```

### onClick

在按钮点击时，调用某个函数：
1. 如果不需要传递参数，`onClick={someFunc}`
2. 如果需要传递参数，用箭头函数，`onClick={() => someFunc(parameter)}`

常见的错误在于用 `onClick={someFunc()}` 或 `onClick={someFunc(parameter)}`，这些写法都是错的，这会在渲染组件时就调用函数，而不是当按钮点击时才调用。正确的做法是直接传递函数引用，而不是函数调用的结果。

### useEffect

```jsx
function App() {

  // 在这个位置调用的函数会在每一次 render 和 re-render 的时候运行

  return ...;
}
```

1. `useEffect` 允许在函数组件中执行副作用操作，通常包括**订阅更新**（subscription）, **获取数据**（fetching data）, **更新 DOM**（directly updating the DOM）, **监听事件**（event listeners）, **计时器**（timers）等。
2. `useEffect`接受2个参数：
   1. 第一个是回调函数，用于执行副作用操作。这个回调函数会在组件渲染后执行。
   2. 第二个是依赖数组（可选）。这个依赖数组用于指定在依赖项发生变化时才执行副作用操作。
3. `useEffect`接受第一个回调函数参数不可以是`async`，也就是 `useEffect` 不能返回 Promise。但是在回调函数中定义一个 `async` 函数并运行是可以接受的。
    ```jsx
    useEffect(async () => {}, []) // X

    useEffect(() => {
      const someFunc = async () => { // √
        await ...
      }
      someFunc();
    }, [])
    ```
4. 依赖数组（Dependancy Array）
   1. 如果不传入依赖数组，useEffect 将在每次组件渲染后都执行副作用操作。
        ```jsx
        useEffect(()=>{
          console.log("Hello World"); // 每次组件渲染后都会执行
        })
        ```
    2. 如果传入空的依赖数组，useEffect 只会在页面第一次加载（Initial Render）的时候执行副作用操作。
        ```jsx
        useEffect(()=>{
          console.log("Hello World");
        }, [])
        ```
5. [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

### Fetch Data

获取数据有3种状态，需要根据不同的状态来动态显示页面内容。
1. loading - 等待数据（display loading state）
2. error - 获取数据的过程中出错（display error message）
3. success - 收到数据（display data）

### Fetch Error

Fetch 和 Axios 在处理错误时有一些不同。Fetch 不像 Axios 能直接地处理 HTTP 错误状态码，Fetch 不会在 HTTP 错误状态码（如 404 或 500）时拒绝 Promise，而是会将错误状态码视为 success request，并将 `ok` 属性设置为 `false`

### Condition

React Hooks 不能放在条件判断之后。
Hooks need to be called in the same order.

```jsx
const Example = () => {
  const [condition, setCondition] = useEffect(true);

  if(condition) {
    // won't work
    const [state, useState] = useState(false);
  }

  useEffect(() => {
    // this will also fail
    console.log("Hello World");
  }, [])
}
```

### Short Circuit

1. 如果 `text` 存在，显示 `text` 的值；如果 `text` 不存在，显示默认值 `default value`。
    ```jsx
    <h2>{text || 'default value'}</h2>
    ```
2. 如果 `user` 不存在，什么都不显示，如果 `user` 存在，显示一个组件。
```jsx
{user && <SomeComponent />}
```

### Ternary Operator

> condition ? expression1 : expression2

### Leverage JavaScript

> How we can use JavaScript to fix issues if the data is missing

1. Optional Chaining
   ```jsx
  prop?.prop?.prop
   ```

### Input

1. 想要 control inputs，需要添加`value`和`onChange`
    ```jsx
    // value 的值为状态变量
    // onChange 的值为 handleChange 函数
    <input type="text" id="name" value={name} onChange={handleChange} />
    ```
2. 设置 `handleChange` 函数，这个函数 right away have access to `event` object
    ```jsx
    // event object 中最有用的两个属性
    // event.target.name 和 event.target.value
    const handleChange = (e) => {
      setName(e.target.value);
    }
  ```
3. 或者不用 `handleChange` 函数，直接在 `onChange` 中写箭头函数
    ```jsx
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    ```

### useRef

1. `useRef` 不会触发重新渲染
2. 把 `useRef` 的值想成一个 container
   ```jsx
   const refContainer = useRef(null)
   console.log(refContainer); // Object
   ```