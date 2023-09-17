import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function FormSignUp({ handleSubmit }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prom, setProm] = useState(true);
  const [nov, setNov] = useState(false);

  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "Deben ser al menos tres caracteres",
    },
  });

  function validarNombre(name) {
    if (name.lenght > 3) {
      return { name: { error: false, message: "" } };
    } else {
      return {
        name: {
          error: true,
          message: "Deben ser al menos tres caracteres",
        },
      };
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ name, lastName, email, prom, nov });
      }}
    >
      <TextField
        required
        id="nombre"
        label="Nombre"
        fullWidth
        margin="normal"
        variant="outlined"
        color="secondary"
        onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }}
        value={name}
        error={errors.name.error}
        helperText={errors.name.error ? errors.name.message : ""}
        onBlur={(e) => {
          setErrors(validarNombre(e.target.value));
        }}
      />

      <TextField
        required
        id="LastName"
        label="Apellidos"
        fullWidth
        margin="normal"
        variant="outlined"
        color="secondary"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <TextField
        required
        id="email"
        label="Correo Electrónico"
        fullWidth
        margin="normal"
        variant="outlined"
        color="secondary"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={prom}
              color="secondary"
              onChange={(e) => setProm(e.target.checked)}
            />
          }
          label="Promociones"
        />

        <FormControlLabel
          control={
            <Switch
              checked={nov}
              color="secondary"
              onChange={(e) => setNov(e.target.checked)}
            />
          }
          label="Novedades"
        />
      </FormGroup>

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        Registrarse
      </Button>
    </form>
  );
}

export default FormSignUp;
