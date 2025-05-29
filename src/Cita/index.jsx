import './Cita.css';

const Cita = ({ id, mascota, propietario, fecha, hora, sintomas, eliminarCita }) => {
  return (
    <div class="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>
      <button class="button elimnar u-full-width" onClick={() => eliminarCita(id)}>Eliminar ×</button>
    </div>
  );
};

export default Cita;