"use client";

import * as React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg"
import styles from "../../../assets/styles/Login.module.css";
import { authenticatingUser } from "@/application/authentication/authenticating";
import { AuthenticationParams } from "@/domain/Authenticated";
import AuthValidation from "@/presentation/validation/authValidation";
import { FormControl, Button } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Validar dados aqui, por exemplo, verificar se os campos não estão vazios
      if (!AuthValidation.validateEmail(email)) {
        setError("Email inválido");
        return;
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
    <div className={styles.boxCenter}>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.fwTitle}>Login</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            className={styles.formControl}
            placeholder="exemplo@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <input
            id="password"
            type="password"
            className={styles.formControl}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <div className={styles.btBox}>
          <Button
            disabled={false}
            type="submit"
            size="medium"
            variant="outlined"
            className={`${styles.fwButton} ${styles.bgButton}`}
          >
            Entrar
          </Button>
          <a href="/signup">Cadastrar</a>
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
