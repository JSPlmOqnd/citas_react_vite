const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  
  const { nombre, propietario, email, alta, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?")

    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-4 py-8 rounded-xl">
      <p className="font-bold text-gray-500 uppercase ">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      
      <p className="font-bold text-gray-500 uppercase ">Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      
      <p className="font-bold text-gray-500 uppercase ">Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      
      <p className="font-bold text-gray-500 uppercase ">Fecha Alta: {''}
        <span className="font-normal normal-case">{alta}</span>
      </p>
      
      <p className="font-bold text-gray-500 uppercase ">Sintomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >Editar        
        </button>
        
        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
          // onClick={() => eliminarPaciente(id)}
          onClick = {handleEliminar}
        >Eliminar        
        </button>
      </div>
    
  </div>
  )
}

export default Paciente
