import './Formulario.css';
import { useState } from 'react';


const Formulario = ({ agregarCita }) => {
  //ESTA FUNCIÓN, LO QUE VA A HACER, ES TOMAR EL VALOR DEL FORMULARIO ACTUALIZADO EN TIEMPO REAL QUE ENVÍA "handleChange"
  const [formCampos, setFormCampos] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  //ESTAS DOS FUNCIONES REALIZAN LOS CAMBIOS EN TIEMPO REAL, Y LOS TOMAN CON EL ENVÍO DEL FORM
  const handleChange = (e) => {
    setFormCampos({
      ...formCampos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formCampos.mascota || !formCampos.propietario || !formCampos.fecha || !formCampos.hora || !formCampos.sintomas) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const nuevaCita = {
      id: Date.now(),   //LE PREGUNTÉ A LA IA COMO TENER UN ID EN ESTE CASO, Y ME DIO LA IDEA DE USAR EL TIMESTAMP
      ...formCampos
    };

    if(confirm("Seguro que desea agregar la cita?")) //EL CONFIRM LO HABÍA PUESTO EN LA FUNCIÓN "agregarCita" en App; pero si no la quería agregar perdía lo que ingresé en los inputs. Ahora, no
    {
      agregarCita(nuevaCita);

      //ACÁ LIMPIAMOS EL FORM
      setFormCampos({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
      });
    }

  };

  
  /*HAGO QUE SE PUEDA INGRESAR SOLO LA FECHA DE HOY, O LOS 30 DÍAS POSTERIORES*/
  /*HAGO QUE SE PUEDA INGRESAR SOLO HORARIOS CADA 20mins, Y DE 9am A 6pm*/
  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" value={formCampos.mascota} onChange={handleChange} />

        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" value={formCampos.propietario} onChange={handleChange} />

        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" min={new Date().toISOString().split("T")[0]} max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]} value={formCampos.fecha} onChange={handleChange} /> 

        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" min="09:00" max="18:00" step="1200" value={formCampos.hora} onChange={handleChange} />

        <label>Síntomas</label>
        <textarea name="sintomas" className="u-full-width" value={formCampos.sintomas} onChange={handleChange}></textarea>

        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </div>
  );
};

export default Formulario;