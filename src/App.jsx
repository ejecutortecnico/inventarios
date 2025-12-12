import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './componentes/Header'
import Menu from './componentes/Menu'
import Contenido from './componentes/Contenido'
import AgregarEmpleados from './componentes/empleados/Agregar'
import AgregarProductos from './componentes/productos/Agregar'
import ListarEmpleados from './componentes/empleados/Listar'
import ListarProductos from './componentes/productos/listar'
import ActualizarEmpleado from './componentes/empleados/actualizar';
import List from './componentes/List';
import BorrarEmpleado from './componentes/empleados/Borrar';

function App() {

  return (
    <>
      <Header />
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
        </div >
      </div >
    </>
  )
}

export default App
