<h1>React Projects</h1>

<h2> Table of Content </h2>

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Set up](#set-up)
  - [Preview Project](#preview-project)

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