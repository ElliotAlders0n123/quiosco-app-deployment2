import Layout from '../layout/Layout';

import UseContext from '../hooks/useContext';

import Producto from '../components/Producto';

export default function Home() {


  const {categoriaActual} = UseContext();

 

  return (
   
              
             <Layout>



               <h1 className="text-4xl font-bold uppercase ">{`${categoriaActual?.nombre}`}</h1>

               <p>Elige y personaliza tu pedido</p>


               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

               {



                  categoriaActual?.productos?.map((producto)=>{


                    return(



                              <Producto  key={producto.id} producto={producto} />



                           )


                  })



               }

               </div>


             </Layout>

          )
}
