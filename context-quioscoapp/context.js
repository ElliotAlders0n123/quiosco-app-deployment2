import {useState,useEffect,createContext} from 'react';

import {toast} from 'react-toastify';

import axios from 'axios';

import {useRouter } from 'next/router';


const ContextQuiosco = createContext();

const QuioscoProvider= ({children})=>{

		const router = useRouter();
		const [categorias,setCategorias] = useState([]);

		const [categoriaActual,setCategoriaActual] = useState({});

		const [mostrarModal,setMostrarModal] = useState(false);


		const [productoActual,setProductoActual] = useState({});

		const [unidadesProducto,setUnidadesProducto] = useState(1);

		const [pedido,setPedido] = useState([]);

		const [nombre,setNombre] = useState("");

		const [total,setTotal] = useState(0);


		const obtenerCategorias = async ()=>{

			const respuesta = await fetch("/api/categorias");

			const resultado = await respuesta.json();


			setCategorias(resultado);



		}

		useEffect(()=>{

			obtenerCategorias();



		},[]);

		useEffect(()=>{

			const ca = categorias?.filter((categoria)=>categoria.id==1);

		

			setCategoriaActual(ca[0]);

		},[categorias]);


		const hanledClickCategoria = (id)=>{

		

			const ca = categorias?.filter((categoria)=>categoria.id===id);

			setCategoriaActual(ca[0]);

		}


		const hanledMostrarModal = ()=>{

			setMostrarModal(!mostrarModal)

		}


		const hanledProductoActual = ({categoriaId,...producto})=>{


			setProductoActual(producto);


		}

		const hanledUnidadesProducto = (unidades)=>{


			setUnidadesProducto(unidades);


		}

		const hanledPedido = (objPedido)=>{


			if(pedido.some((orden)=>orden.id==objPedido.id)){

				const pedidoActualizado = pedido.map((orden)=>{


					if(orden.id==objPedido.id){

						return(objPedido)

					}else{

						return(orden)

					}

				});


				setPedido(pedidoActualizado);

				toast.success("PEDIDO ACTUALIZADO ... ");

			}else{


			
				setPedido([...pedido,objPedido]);
				toast.success("PRODUCTO AGREGADO ...");

			}

			

			

		}

		useEffect(()=>{

			const nuevoTotal = pedido.reduce((total,orden)=>total+orden.precio,0);

			console.log(nuevoTotal);

			setTotal(nuevoTotal);


		},[pedido]);



		const colocarOrden = async (e)=>{

		e.preventDefault();

		try{


			 await axios.post("/api/ordenes",{pedido,nombre,total,fecha: Date.now().toString()});

			 setCategoriaActual(categorias[0]);
		 	setPedido([])
		 	setNombre("");
		 	setTotal(0);

			 setTimeout(()=>{

			 	

			 	router.push("/");

			 },3000);


		}catch(error){

			console.log(error);


		}

		



	}



	return(


				<ContextQuiosco.Provider 

					value={

								{ categorias,
								  categoriaActual,
								  hanledClickCategoria,
								  mostrarModal,
								  hanledMostrarModal,
								  productoActual,
								  hanledProductoActual,
								  unidadesProducto,
								  hanledUnidadesProducto,
								  pedido,
								  setPedido,
								  hanledPedido,
								  nombre,
								  setNombre,
								  total,
								  colocarOrden



								}


							}

				>



					{children}

				</ContextQuiosco.Provider>




			)



}


export {

	QuioscoProvider

}

export default ContextQuiosco;