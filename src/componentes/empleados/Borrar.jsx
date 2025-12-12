import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import api from "../../api/axios";

export default function BorrarEmpleado() {
    const { id } = useParams();
    const [mensaje, setMensaje] = useState();

    useEffect(() => {
        api.delete(`/api/empleados/${id}`)
            .then(() => setMensaje("Usuario eliminado"))
            .catch(err => console.error(err));
    }, [id]);

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
                <h1>pagina Borrar empleados</h1>

            </main>

        </>
    )
}