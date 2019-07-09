import React from 'react';
import './App.css';

const list = [ { title: 'React',
                 url: 'https://facebook.github.io/react/', 
                 author: 'Jordan Walke', 
                 num_comments: 3, 
                 points: 4, 
                 objectID: 0, },
                 { title: 'Graphql',
                 url: 'https://graphql.org/', 
                 author: 'Facebook', 
                 num_comments: 3, 
                 points: 3, 
                 objectID: 1, },
                 { title: 'React-redux',
                 url: 'https://redux.js.org/', 
                 author: 'Dan Abramov and Andrew Clark', 
                 num_comments: 3, 
                 points: 3, 
                 objectID: 2, },
                 
                 ];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      list:list,
    }
  }

  render() {
    return (
      <div>
       {this.state.list.map(item=>
         <div key={item.objectID}>
           <span>
             <a href={item.url}>{item.title}</a>
           </span>
           <span>{item.author}</span>
           <span>{item.num_comments}</span>
           <span>{item.points}</span>
          </div>
       )}
      </div>
    )
  }
}

export default App;
