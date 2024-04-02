import ReactDOM from 'react-dom/client';

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "/src/components/themes/default";
import App from './components/app/app';
import { UserProvider } from './context/user-context';


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <App/>
      </UserProvider>
    </ThemeProvider>
)
