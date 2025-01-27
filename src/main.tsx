import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/root.store.ts';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
