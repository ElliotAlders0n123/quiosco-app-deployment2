
import Image from 'next/image';
import UseContext from '../hooks/useContext';

import Categoria from './Categoria';

const SideBar = ()=>{

	const {categorias} = UseContext();

	

	return(

				<>

					<Image  src="/assets/img/logo.svg" width={300} height={150} alt="logo de la página" />




					<nav className="mt-10">


						{


							categorias.map((categoria)=>{


								return(<Categoria  key={categoria.id} categoria={categoria} />)


							})


						}




					</nav>



				</>



			


		  )




}

export default SideBar;