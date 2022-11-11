
import Image from 'next/image';

import UseContext from '../hooks/useContext';

import {useRouter} from 'next/router';

const Categoria = ({categoria})=>{


	const{nombre,icono,id}=categoria;

	const {categoriaActual , hanledClickCategoria} = UseContext();

	const router = useRouter();


	return(




				<div className={`${categoriaActual?.id == id ? "bg-amber-400" : ""}  md:flex gap-4 w-full items-center border-t-neutral-900	 py-3 px-4  hover:bg-amber-400`}>


					<Image  src={`/assets/img/icono_${icono}.svg`} width={70} height={70} alt={`icono de la categoria ${nombre}`} />
					
					<button className="text-2xl font-bold hover:cursor-pointer" onClick={()=>{

							router.push("/");

							hanledClickCategoria(id);

						}


					}

					>

						{nombre}


					</button>

				</div>



			)



}

export default Categoria;