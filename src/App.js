import { useState } from "react";
import Posts from "./components/Posts";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: 'React question', body: 'How to create custom Components in React', categories: ['React', 'Frontend'] },
    { id: 2, title: 'JavaScript question', body: 'How to create an array in JavaScript?', categories: ['JavaScript', 'Frontend'] },
    { id: 3, title: 'Angular question', body: 'What are decorators in Angular? ', categories: ['Angular', 'Frontend'] },
    { id: 4, title: 'HTML question', body: 'What are forms in HTML?', categories: ['HTML', 'Frontend'] },
    { id: 5, title: 'CSS question', body: 'What are the limitations of CSS', categories: ['CSS', 'Frontend'] },
    { id: 6, title: 'C++ question', body: 'What is std in C++?', categories: ['C++', 'Backend'] },
    { id: 7, title: 'C# question', body: 'What is the benefit of ‘using’ statement in C#?', categories: ['C#', 'Backend'] },
    { id: 8, title: 'Python question', body: 'What is the difference between list and tuples in Python?', categories: ['Python', 'Software'] },
    { id: 9, title: 'Node question', body: 'Why is Node.js Single-threaded?', categories: ['Node', 'Backend'] },
    { id: 10, title: 'Java question', body: 'Can we declare pointer in Java?', categories: ['Java', 'Backend'] },
    { id: 11, title: 'PHP question', body: 'What are some of the common applications of PHP?', categories: ['PHP', 'Backend'] },
    { id: 12, title: 'Swift question', body: 'Explain the difference between let and var in Swift', categories: ['Swift', 'Backend'] },
    { id: 13, title: 'Ruby question', body: 'Why Ruby is known as a language of flexibility?', categories: ['Ruby', 'Backend'] },
    { id: 14, title: 'SQL question', body: 'Define between statements in SQL', categories: ['SQL', 'Backend'] },
    { id: 15, title: 'Pascal question', body: 'What are the data types included in Pascal?', categories: ['Pascal', 'Frontend & Backend'] },
    { id: 16, title: 'Perl question', body: 'What are data types that perl supports?', categories: ['Perl', 'Backend'] },
    { id: 17, title: 'Go question', body: 'What Are Function Literals In Go', categories: ['Go', 'Backend'] },
    { id: 18, title: 'NoSQL question', body: 'Explain the CAP theorem in NoSQL?', categories: ['NoSQL', 'Backend'] },
    { id: 19, title: 'R question', body: 'What is the memory limit of R?', categories: ['R', 'Backend'] },
    { id: 20, title: 'Kotlin question', body: 'How can you concatenate two strings in Kotlin?', categories: ['React', 'Backend'] }
  ])
  const delPost = (id) => {
    setPost(
      posts.filter((elm) => elm.id !== id)
    )
  }
  const selPost = (id) => {
    setPost(
      posts.map(elm => {
        if (elm.id === id) {
          elm.selected = !elm.selected
        }
        return elm
      })
    )
  }
  const delallPosts = () => {
    setPost(
      posts.filter((elm) => !elm.selected)
    )
  }
  return (<>
    <Posts
      seeposts={posts}
      delPost={delPost}
      selPost={selPost}
      delallPosts={delallPosts}
    />
  </>)
}

export default App;
