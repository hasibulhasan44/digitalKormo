import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster
  toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      padding: '40px',
      color: '#ffffff',
      backgroundColor: 'black'
    },
  }}
/>

    </div>
  );
}

export default App;
