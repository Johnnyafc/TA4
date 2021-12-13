const electControl= {};
const db= require("./database.js")
electControl.getElectrodomesticos = (req,res)=>res.send('<h1>Lista de estudiantes</h1>');;
module.exports = electControl;
electControl.getElectrodomesticos = (req,res)=>{
    db.query("Select * FROM estudiantes", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

electControl.getElectrodomestico = (req,res)=>{
    if(isNaN(req.params.id)){
        res.status(400).send("No es un id numérico");
        return;
    }
    db.query("SELECT * FROM estudiantes WHERE id="+req.params.id, 
    (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

electControl.postElectrodomestico = (req,res)=>{
    const {id,nombre,apellido} = req.body;
    if(!nombre || !apellido){
        res.status(400).send("Datos incompletos {nombre, apellido}");
        return;
    }
    let SQLbody = {};
    if(!id) SQLbody = {nombre,apellido};
    else    SQLbody = {id,nombre,apellido};
    
    db.query("INSERT INTO estudiantes SET ?", [SQLbody],
    (err,result)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.send('Estudiante insertado con id: '+result.insertId);
    });
}


electControl.putElectrodomestico = (req,res)=>{
    const {id,nombre,apellido} = req.body;
    let sql = `UPDATE estudiantes
           SET nombre = ?,apellido= ?
           WHERE id = ?`;
    let data=[nombre,apellido,req.params.id];       
db.query(sql,data ,(err,result,fields)=>{
    if (err) {
        res.status(500).send(err);
        console.log(err);
        console.log("error en put")
        return;  
    }
    res.send("Se actualizo estudiante");
});     
    if(!nombre || !apellido){
        res.status(400).send("Error 400\n"+"Datos incompletos {nombre, apellido}");
        return;
    }
}


electControl.deleteElectrodomestico = (req,res)=>{
    db.query("DELETE FROM estudiantes WHERE id="+req.params.id, (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.send("Se elimino el estudiante con exito")
    });
    
}


