import React from 'react'

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

// 一个好的经验法则是，map()调用中的元素需要键。
const listItems = numbers.map((number,index) =>
  <li key={index}>{index + ': ' + number}</li>
);
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number*number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
// 钥匙必须在兄弟姐妹中独一无二
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
function Blog(props) {
  /*键用作React的提示，但它们不会传递给您的组件。如果组件中需要相同的值，请将其显式传递为具有不同名称的prop：
  通过下面的示例，组件可以读取props.id，但不能读取props.key*/
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li 
		  key={post.id}  
		  id={post.id}
		>
          {post.title}
        </li>
      )}
    </ul>
  );
  //JSX允许在花括号中嵌入任何表达式，以便我们可以内联map()结果 
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.id + '.' + post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      {content}
    </div>
  );
}

function List() {
  return (
    <div className="borderBottom ptb20">
      <ul>{listItems}</ul>
	  <NumberList numbers={numbers} />
	  <hr />	  
	  <Blog posts={posts} />
    </div>
  );
}

export default List;