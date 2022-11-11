
import {PrismaClient} from '@prisma/client';
	
export default async function handler(req,res){

	if(req.method ==="POST"){

		const prisma = new PrismaClient();
		console.log("MÉTODO POST ===================");
		const orden = await prisma.pedido.create({

			data:{


					nombre:req.body.nombre,
					total:req.body.total,
					orden:req.body.pedido,
					fecha:req.body.fecha,



				 },

		})


		res.json(orden);


	}



}