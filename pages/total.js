import Layout from '../layout/Layout';
import UseContext from '../hooks/useContext';
import {useEffect,useCallback} from 'react';
import {formatearDinero} from '../helpers/index';


const Total = ()=>{

	const {pedido,nombre,setNombre,total,colocarOrden} = UseContext();

	console.log(pedido);

	

	const comprobarPedido = useCallback(()=>{

		return pedido.length===0 || nombre=="" ;

	},[pedido,nombre]);





	console.log(comprobarPedido());

	return(


				<Layout>

					<h1 className="text-2xl font-bold">TOTAL</h1>

					<form

						onSubmit={colocarOrden}

					>

						<div className="mt-5">

							<label

								htmlFor="nombre"
								className=" text-slate-800 font-bold"

							>

								Nombre

							</label>


							<input 

								type="text"  
								id="nombre"
								placeholder="Nombre"
								className="w-full p-2 bg-gray-200 rounded-md lg:w-1/3 block mt-2"
								onChange={(e)=>{setNombre(e.target.value)}}


							/>

						</div>


						<div className="mt-5">

							<p className="text-2xl">Total a Pagar : <span className="font-bold">{formatearDinero(total)}</span></p>


						</div>

						<div className="mt-5">

							<input 


								type="submit"
								value="Confirmar Pedido"
								className={`${comprobarPedido() ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-800"}   w-full lg:w-1/3 py-2 px-4 text-white font-bold text-md  cursor-pointer`}
								disabled={comprobarPedido()}
							/>


						</div>

					</form>


				</Layout>



		   );

}

export default Total;