import './index.css'
import './App.css'; 
import Hello from './demo/hello';
import Input from './demo/GetInputData';
import HideandShow from './demo/HideAndShow';
import Form from './demo/form';
import User from './demo/FunctionProp';
import UseeffectCondition from './demo/UseeffectCondition';
import ControllComponent from './demo/controllComponent';
import UseRefDemo from './demo/UseRefDemo';
import UncontrollComponent from './demo/UncontrollComponent';
import ConditionalRendring from './demo/conditionalRendring';
import BgChangeEvent from './demo/BgChangeEvent';
import NewFormData from './demo/NewFormData';
import IncDec from './demo/incDec';
import ListRendering from './demo/ListRendering';



// import Game from './demo/game';

 
function App(){
  function userData() {
    alert("hello user")
  }
  return (
    <>
    <Hello />
   <Input />
   <HideandShow />
   <Form />
   <User data={userData}/>
   <UseeffectCondition />
   <ControllComponent />
   <UseRefDemo />
   <UncontrollComponent />
   <ConditionalRendring isloggedIin={false} />
   <BgChangeEvent />
   <IncDec />
   <NewFormData />
   <ListRendering />
    </>
  )

}

export default App;

