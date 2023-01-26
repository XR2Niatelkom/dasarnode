const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { json } = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// app.use(cros())

// app.get("/awal",(req,res) =>{
//     let response = {
//         message : "saya belajar node js",
//         method : req.method,
//         code : res.statusCode
        
//     }
//     res.json(response)
// })

// app.get("/profil/:name/:age", (req,res)=>{
//     let name = req.params.name
//     let age = req.params.age
//     let response = {
//         nama: name,
//         umur: age
//     }
//     res.json(response)
// })

// app.post("/bujur_sangkar", (req,res) => {
//     let panjang = Number(req.body.panjang)
//     let lebar = Number(req.body.lebar)

//     let luas = panjang * lebar
//     let keliling = 2 * (panjang + lebar)

//     let response = {
//         panjang : panjang,
//         lebar: lebar,
//         luas : luas,
//         keliling : keliling
//     }
//     res.json(response)
// })

// app.post("/kubus", (req,res) => {
//     let sisi = Number(req.body.sisi)

//     let volume = sisi * sisi * sisi
//     let luas = 6 * (sisi * sisi)

//     let response = {
//         sisi: sisi,
//         luas: luas,
//         volume: volume,
//     }
//     res.json(response)
// })

// app.post("/balok", (req,res)=>{
//     let panjang = Number(req.body.panjang)
//     let lebar = Number(req.body.lebar)
//     let tinggi = Number(req.body.tinggi)

//     let volume = panjang * lebar * tinggi
//     let luas = 2 * (panjang * lebar) + 2 * (panjang * tinggi) + 2* (lebar * tinggi)

//     let response = {
//         panjang: panjang,
//         lebar: lebar,
//         tinggi: tinggi,
//         volume: volume,
//         luas: luas
//     }
//     res.json(response)
// })

// app.post("/bola", (req,res)=> {
//     let jarijari = Number(req.body.jarijari)

//     let volume = 4/3 * 3.14 * (jarijari * jarijari * jarijari)
//     let luas = 4 * 3.14 * (jarijari * jarijari)

//     let response = {
//         jarijari: jarijari,
//         volume: volume,
//         luas: luas
//     }
//     res.json(response)
// })

// app.post("/tabung", (req,res) =>{
//     let jarijari = Number(req.body.jarijari)
//     let tinggi = Number(req.body.tinggi)

//     let luasselimut = 2 * 3.14 *(jarijari * jarijari)
//     let luaspermukaan = 2 * ( 3.14 * jarijari * jarijari) + 2* ( 3.14 * jarijari * jarijari)
//     let volume = 3.14 * (jarijari * jarijari* tinggi)

//     let response = {
//         jarijari: jarijari,
//         tinggi: tinggi,
//         volume: volume,
//         luasselimut: luasselimut,
//         luaspermukaan: luaspermukaan
//     }
//     res.json(response)
// })

app.post("/celcius", (req,res) => {
    let celcius = Number(req.body.celcius)

    let fahrenheit = (9/5)*celcius + 32
    let kelvin = celcius + 273.15
    let reamur = (4/5) * celcius

    let response = {
        celcius:celcius,
        result:{
            fahrenheit: fahrenheit,
            kelvin: kelvin,
            reamur:reamur
        }
    }
    res.json(response)
})

// app.post("/reamur", (req,res) => {
//     let reamur = Number(req.body.reamur)

//     let fahrenheit = (9/4)* reamur + 32
//     let kelvin = 5/4 * reamur + 273
//     let celcius = (5/4) * reamur

//     let response = {
//         reamur: reamur,
//         result:{
//             fahrenheit: fahrenheit,
//             kelvin: kelvin,
//             celcius: celcius
//         }
//     }
//     res.json(response)
// })

// app.post("/kelvin", (req,res) => {
//     let kelvin = Number(req.body.kelvin)

//     let fahrenheit = (kelvin-9/5)-459
//     let celcius = kelvin + 273
//     let reamur = (4/5) * (kelvin-273)

//     let response = {
//         kelvin: kelvin,
//         result:{
//             fahrenheit: fahrenheit,
//             celcius: celcius,
//             reamur:reamur
//         }
//     }
//     res.json(response)
// })

// app.post("/fahrenheit", (req,res) => {
//     let fahrenheit = Number(req.body.fahrenheit)

//     let celcius = (fahrenheit-32)*5/9
//     let kelvin = (fahrenheit + 459.67)*5/9
//     let reamur = 4/9 * (fahrenheit-32)

//     let response = {
//         fahrenheit: fahrenheit,
//         result:{
//             celcius: celcius,
//             kelvin: kelvin,
//             reamur:reamur
//         }
//     }
//     res.json(response)
// })

// app.post("/bilangan_desimal",(req,res) =>{
//     let angka = Number(req.body.angka)

//     let biner = angka.toString(2)
//     let octal = angka.toString(8)
//     let hexadicimel = angka.toString(16)
//     let response = {
//         decimal: angka,
//         result:{
//             biner: biner,
//             octal: octal,
//             hexadicimel: hexadicimel
//         }
//     }
//     res.json(response)
// })

// app.post("/bilangan_biner",(req,res) =>{
//     let angka = Number(req.body.angka)

//     let decimal = parseInt(angka,2)
//     let octal = decimal.toString(8)
//     let hexadicimel = decimal.toString(16)
//     let response = {
//         decimal: angka,
//         result:{
//             decimal: decimal,
//             octal: octal,
//             hexadicimel: hexadicimel
//         }
//     }
//     res.json(response)
// })

// app.post("/bilangan_octal",(req,res) =>{
//     let angka = Number(req.body.angka)

//     let decimal = parseInt(angka,8)
//     let biner = decimal.toString(2)
//     let hexadicimel = decimal.toString(16)
//     let response = {
//         octal: angka,
//         result:{
//             decimal: decimal,
//             biner: biner,
//             hexadicimel: hexadicimel
//         }
//     }
//     res.json(response)
// })

// app.post("/bilangan_hexadesimel",(req,res) =>{
//     let angka = Number(req.body.angka)

//     let decimal = parseInt(angka,16)
//     let biner = decimal.toString(2)
//     let octal = decimal.toString(8)
//     let response = {
//         hexadicimel: angka,
//         result:{
//             decimal: decimal,
//             biner: biner,
//             octal: octal
//         }
//     }
//     res.json(response)
// })

// app.post("/bmi", (req,res) =>{
//     let berat = Number(req.body.berat)
//     let tinggi = Number(req.body.tinggi)
//     let bmi = berat/(tinggi*tinggi)
//     let status

//     if(bmi < 18.5){
//         status = "kekurangan berat badan"
//     }
//     else if (bmi >= 18.5 && bmi <= 24.9){
//         status = "normal (ideal)"
//     }
//     else if (bmi >= 25.0 && bmi <= 29.9){
//         status = "kelebihan berat badan"
//     }
//     else{
//         status = "kegemukan (obesitas)"
//     }

//     let response = {
//         berat: berat,
//         tinggi:tinggi,
//         bmi:bmi,
//         status:status
//     }
//     res.json(response)
// })


app.listen(8000, () =>{
    console.log("yeay")
})

