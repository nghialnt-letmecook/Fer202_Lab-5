import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './components/Navbar/Mynavbar';
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="d-flex flex-column vh-100 container">
      <Mynavbar />
      <div className="flex-grow-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;