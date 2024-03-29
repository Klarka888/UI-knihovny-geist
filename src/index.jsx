import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { GeistProvider, CssBaseline } from '@geist-ui/core'

export default () => (<></>)

createRoot(
  document.querySelector('#app'),
).render(

<GeistProvider>
<CssBaseline /> 
</GeistProvider> );
