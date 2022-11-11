import UseContext from '../hooks/useContext';

import Image from 'next/image';

import {formatearDinero} from '../helpers/index';

import {useState,useEffect} from 'react';

const ModalProducto = ()=>{


	const {hanledMostrarModal,
		   productoActual,
		   unidadesProducto,
		   hanledUnidadesProducto,
		   pedido,
		   hanledPedido



		  } = UseContext();

	 const {id,imagen,precio,nombre} = productoActual;

	 const [textoBoton,setTextoBoton] = useState("");


	 useEffect(()=>{

	 	if(pedido.some((orden)=>orden.id==productoActual.id)){

	 		const product = pedido.find((orden)=>orden.id==productoActual.id)

	 		hanledUnidadesProducto(product.unidadesProducto)

	 		setTextoBoton("EDITAR PEDIDO");

	 	}else{

	 		hanledUnidadesProducto(1);

	 		setTextoBoton("AÑADIR PEDIDO");
	 	}

	 },[productoActual])



	return(



				<div className="md:flex gap-5">


					<div>

						<Image src={`/assets/img/${imagen}.jpg`} height={400} width={300} alt="imagen" />

					</div>

					<div>


						<button   onClick={hanledMostrarModal} className="w-full flex justify-end py-2 cursor-pointer">


							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
							  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>


						</button>


						<h1 className="font-bold text-2xl uppercase ">{nombre}</h1>

						<p className="text-3xl text-amber-400 font-bold py-2">{formatearDinero(precio)}</p>

						<div className="flex gap-8 mt-4">

							<button onClick={()=>{ unidadesProducto>1 && hanledUnidadesProducto(unidadesProducto-1)}}>

									
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9">
								  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>


							</button>

							<p className="text-2xl">{unidadesProducto}</p>


							<button onClick={()=>{   hanledUnidadesProducto(unidadesProducto+1)}} >

								

								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9">
								  
								  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								
								</svg>


							</button>

						</div>

						<button className="bg-indigo-600 text-whie py-2 px-6 mt-5 text-white hover:bg-indigo-800"

								onClick={()=>{  hanledMostrarModal();  hanledPedido({...productoActual,unidadesProducto})}}

						>

							
							{textoBoton}


						</button>


					</div>


				</div>


			)




}

export default ModalProducto;