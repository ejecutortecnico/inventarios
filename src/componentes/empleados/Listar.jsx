import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import api from "../../api/axios";

export default function ListarEmpleados() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        api.get("/api/empleados", {
            withCredentials: true
        })
            .then(res => setUsuarios(res.data))
            .catch(err => console.error("Error:", err));
    }, []);
    return (
        <>
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                >
                    <h1 class="h2">Dashboard</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group me-2">
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                Share
                            </button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                Export
                            </button>
                        </div>
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
                        >
                            <svg class="bi" aria-hidden="true">
                                <use xlink:href="#calendar3"></use>
                            </svg>
                            This week
                        </button>
                    </div>
                </div>
                <div>
                    <h3>Empleados</h3>
                    <div class="table-responsive small">
                        <table class="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Opiones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map(u => <tr>
                                    <td>{u.id_empleado}</td>
                                    <td>{u.nombre}</td>
                                    <td>{u.rol}</td>
                                    <td>{u.usuario}</td>
                                    <td>
                                        <Link to={`/empleados/ver/${u.id_empleado}`} className="btn btn-primary">Ver</Link>
                                        <Link to={`/empleados/actualizar/${u.id_empleado}`} className="btn btn-secondary">Editar</Link>
                                        <Link to={`/empleados/borrar/${u.id_empleado}`} className="btn btn-danger">Borrar</Link>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>



                </div>
            </main>
        </>
    )
}