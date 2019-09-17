import React ,{Component} from 'react';
import './todo.css';


export default class Todo extends Component{
  constructor(props){
    super(props);
    this.state={
      todos:[],
      name:''
    }
  }

  onInput=(e)=>{
    this.setState({
      name:e.target.value
    })
  }

  addTodo  = ()=>{
    const{todos,name} =this.state;
    this.setState({
      todos:[...todos,name]
    });
  }

  removeTodo= (index)=>{
    const{todos}=this.state;
    this.setState({
      todos:[...todos.slice(0,index),...todos.slice(index+1)]
    });
  }

  render(){
    const {todos}=this.state;
    return(
      <div >
        <div className="input">
          <input type="text" className="width"　 onInput={(e)=>{this.onInput(e)}} />
          <button onClick={(e)=>{this.addTodo(e)}}>登録</button>
        </div>
      <ul>
        {todos.map((todo, index) => <li key={index}>
        {todo}
        <button onClick={()=>{this.removeTodo(index)}}>削除</button>
        </li>)}
      </ul>
    </div>
      )
  }
}
