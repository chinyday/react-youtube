import { Outlet } from 'react-router-dom';
import './App.css';

// 자식 요소들을 보여줄 수 있도록 아울렛을 설정
function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
