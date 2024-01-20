
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { CreateTodos, Description1, Filter1, GetTodos, Title1 } from '../store/atom/states';

function App() {
  
  
  return (
    <div>
      <RecoilRoot>
      <Input></Input>
      <Button >Add todo</Button>
      <Filter></Filter>
    </RecoilRoot>
    </div>
  )
  function Filter(){
    const tods=useRecoilValue(GetTodos);
    const setfilter=useSetRecoilState(Filter1)
    // function Todo({title,description}){
    //   return <div>
    //     <h3>{title}</h3>
    //     <h4>{description}</h4>
    //   </div>
    // }
    return <div>
      <input placeholder='filter' onChange={(e)=>{
        setfilter(e.target.value)
      }}></input>
      <div>
      {tods.map(function(todo){
            return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                </div>
        })}
      </div>
    </div>
  }
  function Input(){
  const setTitle =useSetRecoilState(Title1);
  const setDes =useSetRecoilState(Description1);
    return <div>
    <input placeholder='title' onChange={(e)=>{
      setTitle(e.target.value)
    }}></input>
    <input placeholder='description' onChange={(e)=>{
      setDes(e.target.value)
    }}></input>
    </div>
  }
  function Button({children}){
    
    const Title =useRecoilValue(Title1);
    const Des =useRecoilValue(Description1);
    
    const [todos,setTodos]=useRecoilState(CreateTodos);
    function settodoss(){
      let todo1={
      title:Title,
      description: Des
    }     
      setTodos([...todos, todo1]);
    }
    return <div>
      <button onClick={settodoss}>{children}</button>
    </div>
  }
}

export default App
