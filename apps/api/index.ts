import express, { type Request, type Response } from "express";
import {prismaClient} from "db/client"

const app = express()







app.post("/api/v1/add-website",async(req:Request,res:Response) => {
    try {
        const {name} =req.body;

        const createdWebsite = await prismaClient.website.create({
            data:{
                name
            }
        })

        res.status(200).json({message:"Website added succesfully!"})

    } catch (error) {
        console.error("Error in adding website",error);
        throw error;
    }
})

app.get("/api/v1/status/:websiteId",async(req:Request,res:Response) => {
    try {
        const websiteId = req.params.websiteId;

        const websiteExists = await prismaClient.website.findFirst({
            where:{
                id:websiteId
            }
        })

        if(!websiteExists){
            res.status(404).json({message:"No website found"})
            return;
        }
        const websiteDetails = await prismaClient.website.findFirst({
            where:{
                id:websiteId
            },
            select:{
                regions:{
                   include:{
                    ticks:true
                   } 
                },
                ticks:true
            }
        })

        res.status(200).json({data:websiteDetails})


    } catch (error) {
        console.error("Error in fetching details of website",error);
        throw error; 
    }
})









app.listen(8080,async()=>{
        console.log("server is listening to port 8080")
})

