'use client'

import * as React from "react";
import { authenticatingUser } from "@/application/authentication/authenticating";
import { AuthenticationParams } from "@/domain/Authenticated";
import AuthValidation from "@/presentation/validation/authValidation";
import Styles from "@/app/styles/Login.module.css";
import { FormControl, FormHelperText, Button } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Validar dados aqui, por exemplo, verificar se os campos não estão vazios
      if (!AuthValidation.validateEmail(email)) {
        setError("Email inválido")
        return
      }

      if (!AuthValidation.validatePassword(password)) {
        setError("Senha inválida");
        return;
      }

      const body: AuthenticationParams = {
        email: email,
        password: password,
      };

      authenticatingUser(body);
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <div className={Styles.boxCenter}>
      <div className={Styles.fwTitle}>Login</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl className={Styles.formGroup}>
          <label htmlFor="email" className={Styles.label}>
            Email
          </label>
          <input
            id="email"
            className={Styles.formControl}
            placeholder="exemplo@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl className={Styles.formGroup}>
          <label htmlFor="password" className={Styles.label}>
            Senha
          </label>
          <input
            id="password"
            type="password"
            className={Styles.formControl}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <div className={Styles.btBox}>
          <Button
            disabled={false}
            type="submit"
            size="medium"
            variant="outlined"
            className={`${Styles.fwButton} ${Styles.bgButton}`}
          >
            Entrar
          </Button>
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
