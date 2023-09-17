import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ProviderNews from './context/ProviderNews.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProviderNews>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </ProviderNews>  
)






