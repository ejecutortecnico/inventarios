import api from "../../api/axios";
import { useState, useEffect } from "react";

export default function Login() {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    function ingresar(e) {
        e.preventDefault();
        api.post("/auth/login", { usuario: usuario, password: password }, {
            withCredentials: true
        })
            .then(res => crearVar())
            .catch(err => console.error("Error:", err));
    }

    function crearVar() {
        localStorage.setItem("isLogged", true)
        window.location.reload();
    }

    return (
        <>
            <div className="container">
                <form onSubmit={ingresar}>
                    <div class="mb-3">
                        <label for="usuario" class="form-label">Usuario</label>
                        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="rememberMe" />
                        <label class="form-check-label" for="rememberMe">Recordar</label>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Login</button>
                </form>
            </div>
        </>
    )

}