import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css'
import Counter from './Counter';
import Profile from './Profile';
import Login from './Login';
import ColorSelector from './redux/ColorSelector';


function App() {

 
  return (
    <>
      <Provider store={store}>
        {/* <Counter /> */}
        <Profile/>
        <Login/>
        <ColorSelector/>
      </Provider>

    </>
  )
}

export default App
