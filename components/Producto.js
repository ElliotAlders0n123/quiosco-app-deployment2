import Image from 'next/image';
import {formatearDinero} from '../helpers/index';

import UseContext from '../hooks/useContext';




const Producto = ({producto})=>{

	

	const {id,imagen,nombre,precio} = producto;

	const {hanledMostrarModal,hanledProductoActual} = UseContext();
 
	return(



				<div className="px-2 py-2">


					<Image  src={`/assets/img/${imagen}.jpg`}  height={200} width={400} alt="Imagen producto"/>

					<p className="uppercase font-bold">

						{nombre}

					</p>

					<p className="uppercase font-bold text-amber-400 text-3xl">

						{formatearDinero(precio)}

					</p>


					<button  onClick={()=>{

						hanledMostrarModal();

						hanledProductoActual(producto);

					}} 
					className="bg-indigo-600 w-full py-1 text-white font-bold my-1 hover:bg-indigo-800"

					>


						AGREGAR PRODUCTO


					</button>

				</div>




			)





}


export default Producto;