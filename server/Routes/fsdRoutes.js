import { Router } from "express";

const route = Router()

route.get('/', (req, res)=>{
    res.send("This is Express")
})

route.get('/students', (req, res)=>{
    res.json([
        {
            name:"Mahesh",
            batchno:22
        },
        {
            name:"vishal",
            batchno:20
        },
        {
            name:"rahul",
            batchno:19
        },
        {
            name:"rajesh",
            batchno:22
        }
    ])
})

export default route