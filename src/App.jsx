import './App.css'
import { Button } from './components/Button';
import {ShareIcon} from "./icons/ShareIcon";
import {PlusIcon} from "./icons/PlusIcon";

function App() {

  return (
    <>
      <Button variant="primary" text="Add Content" startIcon={<PlusIcon />}></Button>
      <Button variant="secondary" text="Share" startIcon={<ShareIcon />} ></Button>
    </>
  )
}

export default App
