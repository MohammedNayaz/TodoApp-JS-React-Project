import React from 'react';
import axios from 'axios';


console.clear();

const Title = ({todoCount}) => {
  return(
    <div>
      <div>
      <div class="container">
  <div class="row">
    <div class="col">
      <h2>Project By:<br/> Mohammed Nayaz</h2>
    </div>
    <div class="col">
      <h1> Eduonix React Edegree Project <br/>TO DO APP: {todoCount} </h1>
    </div>
    <div class="col">

    </div>
  </div>
</div>

      </div>
    </div>
  )
}

const TodoForm = ({addTodo}) => {
  let input;

  return(

    <div class="container">
  <div class="row">
    <div class="col">

    </div>
    <div class="col">
    <form onSubmit = { (e) => {
      e.preventDefault();

      addTodo(input.value);
      input.value = '';
    }}>
      <input className=" form-control col-md-12" ref={node => {input = node;}}></input>
      <br/>

    </form>
    </div>
    <div class="col">

    </div>
  </div>
</div>

  );
};

const Todo = ({todo,remove}) =>{
  return (<a href="#" className="list-group-item" onClick ={()=>{remove(todo.id)}}>{todo.item}</a>)
}
const TodoList = ({todos, remove})=>{
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}></Todo>)
  });
  return(
    <div class="container">
  <div class="row">
    <div class="col">

    </div>
    <div class="col">
      <div className = "list-group" style ={{marginTop:'30px'}}>{todoNode} </div>
    </div>
    <div class="col">

    </div>
  </div>
</div>

  )
}


window.id=0;
class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
    this.apiUrl="https://60cda68891cc8e00178dbb85.mockapi.io/todoitems"
  }

  // Lifecycle Method
  componentDidMount(){
    axios.get(this.apiUrl)
      .then((res)=>{
        this.setState({data:res.data});
    });
  }

  // To Do handler
  addTodo(val){
    const todo = {item:val}
    axios.post(this.apiUrl,todo)
      .then((res)=>{
        this.state.data.push(res.data);
        this.setState({data:this.state.data});
    });
  }


  handleRemove(id) {
    const remainder = this.state.data.filter((todo) =>{
      if(todo.id!==id) return todo;
    });

    axios.delete(this.apiUrl+'/'+id)
      .then((res) =>{
        this.setState({data:remainder});

      })
  }

  render(){
    return(
      <div>
        <Title todoCount = {this.state.data.length}></Title>
        <TodoForm addTodo = {this.addTodo.bind(this)}></TodoForm>
        <TodoList todos ={this.state.data} remove={this.handleRemove.bind(this)}></TodoList>

      </div>
    );
  }
}

export default TodoApp;
