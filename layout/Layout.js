import Head from 'next/head';

import SideBar from '../components/SideBar';

import Modal from 'react-modal';

import ModalProducto from '../components/ModalProducto';

import UseContext from '../hooks/useContext';

import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Pasos from '../components/Pasos';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

const Layout = ({children})=>{

	const {mostrarModal} = UseContext();


	return(




				<>


					<Head>
							
						<title>CAFÉ</title>

						<meta  type="description" content="PÁGINA DE VENTA DE PRODUCTOS"  />

					</Head>


					
					<div className="md:flex max-h-screen overflow-y-hidden">


						
						

						<aside className=" md:w-3/12 overflow-y-scroll">

							<SideBar />


						</aside>


						
						<main className="md:w-9/12 max-h-screen pt-10 px-5  overflow-y-scroll">


							<Pasos />

							

							 <div>

							 		{children}
							    

							     {

							     	mostrarModal && (


							     											 <Modal
																		        isOpen={mostrarModal}
																		        style={customStyles}
																		      >

																		      	<ModalProducto />

																		      </Modal>


							     									)

							     }

							     	<ToastContainer />


						    </div>



						</main>


						






						</div>


				</>



		  );




}


export default Layout;