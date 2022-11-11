import Layout from '../layout/Layout';

import UseContext from '../hooks/useContext';

import ResumenProducto from '../components/ResumenProducto';

const Resumen = ()=>{


	const {pedido} = UseContext();


	return(


				<Layout>

					<h1 className="text-2xl font-bold">RESUMEN</h1>
					<p  className="text-gray-500">Administra tu pedido</p>

					<div>

						{


							pedido.map((producto)=>(


														<ResumenProducto  key={producto.id} producto={producto} />


													)

									   )


						}
						



					</div>

				</ Layout >


			)




}

export default Resumen;