import { useEffect, useState } from 'react';
import Formulario from './Formulario';
import Cita from './Cita';
import Listado from './Listado';

function App() {
  const citasPorDefault = [{
    id: 1,
    mascota: "Shaina",
    propietario: "Uriel Smucler",
    fecha: "30/06",
    hora: "10:20",
    sintomas: "Control rutinario"
  },
  {
    id: 2,
    mascota: "Pluto",
    propietario: "Mickey Mouse",
    fecha: "26/06",
    hora: "15:40",
    sintomas: "Resfrío"
  },
  {
    id: 3,
    mascota: "Negrita",
    propietario: "Pedro Gómez",
    fecha: "22/05",
    hora: "17:00",
    sintomas: "Baño y corte higienico"
  }]

  const [citas, setCitas] = useState([
    
  ]);

  const agregarCita = (nuevaCita) => {
      setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    if(confirm("Seguro que desea eliminar la cita?"))
    {
      const nuevasCitas = citas.filter(cita => cita.id !== id);
      setCitas(nuevasCitas);
      localStorage.setItem('citas', JSON.stringify(nuevasCitas));
    }
  };

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas));
    } else {
      setCitas(citasPorDefault);
    }
  }, []);

  useEffect(() => {
    if (citas?.length) {
      localStorage.setItem('citas', JSON.stringify(citas));
    }
  }, [citas]);

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <Formulario agregarCita={agregarCita} />
        <Listado citas={citas} eliminarCita={eliminarCita} />
      </div>
    </>
  );
}

export default App;