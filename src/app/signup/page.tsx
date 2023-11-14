"use client"

import { Button, Container, FormControl } from '@mui/material';
import style from "../../../assets/styles/signup.module.css"
import * as React from 'react';
import { User } from '@/domain/User';
import signup from '@/application/signup/signup';
import AuthValidation from '@/presentation/validation/authValidation';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '@/presentation/constants/appRouter';

const SignupPage = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [nameComplete, setNameComplete] = React.useState("")
    const [cpf, setCpf] = React.useState("")
    const [newPhone, setNewPhone] = React.useState("")
    const [error, setError] = React.useState<string | null>(null)

    const { push } = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!AuthValidation.validateEmail(email)) {
            setError("Email inválido")
            return
        }
        if (!AuthValidation.validatePassword(password)) {
            setError("Senha deve ter no mínimo 8 caracteres")
            return
            }

        if (!AuthValidation.validateCPF(cpf)) {
            setError("CPF Inválido")
            return
        }

        if (!AuthValidation.validatePhone(newPhone)) {
            setError("Telefone Inválido")
            return
        }

        const phone = {
            ddd: "(19)",
            numPhone: "9 9999-9999"
        }

        const body: User = {
            email, password, nameComplete, cpf, phone
        }

        await signup(body)
        push(APP_ROUTES.public.signin)
    }

    return (
        <Container className={style.boxCenter}>
            <div className={style.fwTitle}>Sign up</div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={style.row}>
                    <FormControl className={style.formGoup}>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            className={style.formControl}
                            type="email"
                            id="email"
                            placeholder='exemplo@exemplo.com'
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
                            className={style.formControl}
                            placeholder='Senha'
                            type="password"
                            id="password"
                            required
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
                            placeholder='Nome completo'
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
                            placeholder='000.000.000-00'
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
                        value={newPhone}
                        onChange={e => setNewPhone(e.target.value)}
                        placeholder='(00) 0 0000-0000'
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
                    <div className={style.linkSignin}>
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