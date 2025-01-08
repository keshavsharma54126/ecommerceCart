
import './App.css'
import { Outlet } from 'react-router-dom'
import Products from './componetns/products'
function App() {
  return (
    <>
    <div className='container mx-auto p-4 flex flex-col items-center justify-center'>
      <Outlet />
      <Products />
    </div>
    </>
  )
}
export default App
