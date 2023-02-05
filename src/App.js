import { Outlet } from 'react-router-dom';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchHeader from './conponents/SearchHeader';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        {/* 자식 요소들을 보여줄 수 있도록 아울렛을 설정 */}
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}

export default App;
