"use client"

import { Button, Container, FormControl } from '@mui/material';
import style from "../../../assets/styles/signup.module.css"
import * as React from 'react';

const SignupPage = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [nameComplete, setNameComplete] = React.useState("")
    const [cpf, setCpf] = React.useState("")
    const [phone, setPhone] = React.useState("")

    return (
        <Container className={style.boxCenter}>
            <div className={style.fwTitle}>Sign up</div>
            <form>
                <div className={style.row}>
                    <FormControl className={style.formGoup}>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            className={style.formControl}
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl className={style.formGoup}>
                        <label htmlFor="password">
                            Senha
                        </label>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className={style.formControl}
                            type="password"
                            id="password"
                        />
                    </FormControl>
                </div>
                <div className={style.row}>
                    <FormControl className={style.formGoup}>
                        <label htmlFor="name">
                            Nome completo
                        </label>
                        <input
                            value={nameComplete}
                            onChange={e => setNameComplete(e.target.value)}
                            required
                            className={style.formControl}
                            type="text"
                            id="name"
                        />
                    </FormControl>
                    <FormControl className={style.formGoup}>
                        <label htmlFor="cpf">
                            CPF
                        </label>
                        <input
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            required
                            className={style.formControl}
                            type="text"
                            id="cpf"
                        />
                    </FormControl>
                </div>
                <FormControl className={style.formGoup}>
                    <label htmlFor="phone">
                        Telefone
                    </label>
                    <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                        className={style.formControl}
                        type="tel"
                        id="phone"
                    />
                </FormControl>
                <div className={style.btSignup}>
                    <Button
                        disabled={false}
                        type="submit"
                        size="medium"
                        variant="outlined"
                        className={`${style.fwButton} ${style.bgButton}`}
                    >
                        Cadastrar
                    </Button>
                    <div>
                        <a href="/signin">
                            Sign in
                        </a>
                    </div>
                </div>
            </form>
        </Container>
    );
}

export default SignupPage;