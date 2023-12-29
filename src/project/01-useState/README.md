#### Birthday Buddy 的另一种写法

创建2个组件：`List.jsx` 和 `Person.jsx`。

1. `App.jsx` 中导入 `List.jsx` 组件，传入 `people` prop
    ```jsx
    // App.jsx
    import List from "...";

    function App() {
      const [people, setPeople] = useState(data);

      return <main>
        //其他代码
        <List people={people}>
      </main>
    }
    ```
2. `List.jsx` 中导入 `Person.jsx` 组件，用展开运算符传入 people 这个 Object 里的属性。
   ```jsx
   // List.jsx
   import Person from "...";

   const List = ({people}) => {
    retrun <section>
      {people.map((person) => {
        return <Person key={person.id} {...person}>
      })}
     </section>
   }
   ```
3. Person 组件

    ```jsx
    // Person.jsx

    const Person = ({ name, age, image}) => {
      return <article>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    }
    ```
