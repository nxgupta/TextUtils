import App from'./App';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { SnackbarProvider } from 'notistack';

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <SnackbarProvider  maxSnack={1} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </SnackbarProvider>
)