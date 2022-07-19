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
import SimpleRouter from './demo/SimpleRouter';
import LoginForm from './demo/LoginForm';
import Lifecycle from './demo/ConstructorLifecycle';
import Componentdidmount from './demo/Componentdidmount';
import Componentdidupdate from './demo/Componentdidupdate';
import ShouldUpdate from './demo/Shouldupdate';



// import Game from './demo/game';

 
function App(){
  // function userData() {
  //   alert("hello user")
  // }
  return (
    <>
    <Lifecycle />
    <SimpleRouter />
    <LoginForm />
    <Hello />
   <Input />
   <HideandShow />
   <Form />
   <User/>
  
   <UseeffectCondition />
   <ControllComponent />
   <UseRefDemo />
   <UncontrollComponent />
   <ConditionalRendring isloggedIin={false} />
   <BgChangeEvent />
   <IncDec />
   <NewFormData />
   <Componentdidmount />
   <Componentdidupdate /> 
   <ShouldUpdate />
   <ListRendering />
    </>
  )

}

export default App;

