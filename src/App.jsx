import { useState } from 'react'
import './App.css'
import Testimonio from './componentes/Testimonio'

function App() {
  const [count, setCount] = useState(0)

  const users = [
    {
      nombre: "Shawn Wang",
      pais: "Singapur",
      imagen: "shawn",
      cargo: "Ingeniero de software",
      empresa: "Amazon",
      testimonio:
        "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. <b>freeCodeCamp cambió mi vida</b>",
    },
    {
      nombre: "Sara Chima",
      pais: "Nigeria",
      imagen: "sarah",
      cargo: "Ingeniero de software",
      empresa: "ChatDesk",
      testimonio:
        "<b>freeCodeCamp fue la puerta de entrada a mi carrera</b> como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble",
    },
    {
      nombre: "Emma Bostian",
      pais: "Suecia",
      imagen: "emma",
      cargo: "Ingeniero de software",
      empresa: "Spotify",
      testimonio:
        "Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <b>freeCodeCamp me dio las habilidades</b> y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify",
    },
  ];

  return (
    <>
      <div className="App">
        <div className="contenedor-principal">
          <h1 className='titulo1' >Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

          {users.map((user, index) => {
            return (
              <Testimonio
                key={index}
                nombre={user.nombre}
                pais={user.pais}
                imagen={user.imagen}
                cargo={user.cargo}
                empresa={user.empresa}
                testimonio={user.testimonio}
              />
            );
          })}
        </div>
      </div>
    </>
  )
}

export default App;
