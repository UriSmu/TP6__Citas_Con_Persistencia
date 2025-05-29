import './Listado.css';
import Cita from '../Cita';

const Listado = ({ citas , eliminarCita }) => {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map((cita) => (
        <Cita
        key={cita.id}
        id={cita.id}
        mascota={cita.mascota}
        propietario={cita.propietario}
        fecha={cita.fecha}
        hora={cita.hora}
        sintomas={cita.sintomas}
        eliminarCita={eliminarCita}
      />
      ))}
    </div>
  );
};

export default Listado;