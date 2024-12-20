import express from "express"
import bodyParser from "body-parser"
const app=express()
const port =3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

app.listen(port,()=>{
    console.log("Listening on port 3000")
})
let age;
app.get("/",(req,res)=>{
    res.render("index.ejs",{Age:age})
})

app.post("/submit",(req,res)=>{
    let dob=req.body["Age"]
    console.log(dob)
    const currentYear = new Date().getFullYear();
    const currentmonth=new Date().getMonth()+1;
    const currentDate=new Date().getDate();
    let l=dob.split("-")
    let by=parseInt(l[2],10)
    age=currentYear-by
    if (currentmonth<parseInt(l[1],10)){
        age--;
    }
    else if(currentmonth==parseInt(l[1],10)){
        if (currentDate<parseInt(l[0],10)){
            age--;
        }
    }
    console.log(age)
    res.redirect("/")
    


})

