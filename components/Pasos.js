

import Link from 'next/link';

import {useRouter} from 'next/router';

import {useEffect , useState } from 'react';


const Pasos = ()=>{

	const pasos = [

					   {paso:1,nombre:"Menú",url:"/"},
					   {paso:2,nombre:"Resumen",url:"/resumen"},
					   {paso:3,nombre:"Datos",url:"total"}

				   ];


	const router = useRouter();

	const [largoBarra,setLargoBarra] = useState(0);

	const hanledLargoBarra = ()=>{

		if(router.pathname=="/"){

			setLargoBarra(2);

		}else if(router.pathname=="/resumen"){

			setLargoBarra(50);

		}else{

			setLargoBarra(100);

		}

	}


	useEffect(()=>{

		hanledLargoBarra();

	},[])


	return(

			<>

				<div className="flex justify-between px-2 py-3 text-xl font-bold uppercase">

					{

						pasos.map((paso)=>(

												<Link href={paso.url} key={paso.paso}>{paso.nombre}</Link>


											)

						)


					}



				</div>


				<div className="h-2 bg-amber-400 mb-3 rounded" style={{width:`${largoBarra}%`}}>


				</div>

			</>


			)


}


export default Pasos;