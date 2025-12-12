import { useState } from "react";
import api from "../../api/axios";
import { useParams } from "react-router-dom";

export default function ActualizarEmpleados() {
    const [nombre, setNombre] = useState("");
    const [rol, setRol] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("")
    const { id } = useParams()

    function actUsuario(e) {
        e.preventDefault();
        api.put(`/api/empleados/${id}`, { nombre: nombre, rol: rol, usuario: usuario, password: password })
            .then(res => limpiar())
            .catch(err => console.error("Error:", err));
    }

    function limpiar() {
        setNombre("")
        setRol("")
        setUsuario("")
        setPassword("")
        setMensaje("usuario actualizado con exito")
    }

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                >
                    <h1 className="h2">Dashboard</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                Share
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                Export
                            </button>
                        </div>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
                        >
                            <svg className="bi" aria-hidden="true">
                                <use xlink:href="#calendar3"></use>
                            </svg>
                            This week
                        </button>
                    </div>
                </div>
                {mensaje && (
                    <div className="alert alert-success" role="alert">
                        {mensaje}
                    </div>
                )}
                <h1>pagina actualizar empleados</h1>
                <form onSubmit={actUsuario} classNameName="form">
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <input value={rol} onChange={(e) => setRol(e.target.value)} />
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Actualizar Usuario</button>
                </form>

            </main>
        </>
    )
}