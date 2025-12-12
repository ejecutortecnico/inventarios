import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './componentes/Header'
import Menu from './componentes/Menu'
import AgregarEmpleados from './componentes/empleados/Agregar'
import AgregarProductos from './componentes/productos/Agregar'
import ListarEmpleados from './componentes/empleados/Listar'
import ListarProductos from './componentes/productos/listar'
import ActualizarEmpleado from './componentes/empleados/actualizar';
import List from './componentes/List';
import BorrarEmpleado from './componentes/empleados/Borrar';
import Login from './componentes/auth/Login';

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"))

  console.log(isLogged)


  return (
    <>
      {isLogged && (
        <>
          < Header />
          <div className="container-fluid">
            <div className="row">
              <Menu />
              <Routes>
                <Route path="/" element=<List /> />
                <Route path="/empleados/agregar" element=<AgregarEmpleados /> />
                <Route path="/empleados/actualizar/:id" element=<ActualizarEmpleado /> />
                <Route path="/empleados/borrar/:id" element=<BorrarEmpleado /> />
                <Route path="/empleados/listar" element=<ListarEmpleados /> />
                <Route path="/productos/listar" element=<ListarProductos /> />
                <Route path="/productos/agregar" element=<AgregarProductos /> />
              </Routes>
            </div>
          </div></>
      )}
      {!isLogged &&
        <Routes>
          <Route path="/" element=<Login /> />
        </Routes>
      }
    </>
  )
}

export default App
