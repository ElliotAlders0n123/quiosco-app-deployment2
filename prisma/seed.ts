import {productos} from './data/productos';
import {categorias} from './data/categorias';


import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();


const main = async ():Promise<void>=>{


	await prisma.categoria.createMany({


		data:categorias


	})


	await prisma.producto.createMany({

		data:productos


	})




}


main();