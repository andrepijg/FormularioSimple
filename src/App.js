import './App.css';
// import { Fragment } from 'react'; y se coloca en vez del div principal la etiqueta <Fragment /> o también solo así <> </>
import FormSignUp from './components/FormSignUp';
import { Container,Typography } from '@mui/material';

function App() {

  const handleSubmit = (valores) => {
    console.log("APPJS", valores);
  }
  return (
    <Container component="section" maxWidth="md">
    <Typography variant='h4' align='center' component="h1">Formulario de Registro</Typography>
      <FormSignUp handleSubmit={handleSubmit}/>
      
    </Container>
  );
}

export default App;
