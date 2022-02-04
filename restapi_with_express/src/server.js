import express from "express";

const app= express();

export const start = ()=> {
    app.listen(3000, ()=>{
        console.log("server started at port 3000");
    })
}