import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Root } from './Root.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
);
