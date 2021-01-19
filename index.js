const express = require("express");
const bodyParser = require('body-parser');
const path=  require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');

dotenv.config({path:'./.env'});

const app  = express();
const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.database
})  

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');

db.connect((error) => {
    if(error){
        console.log(error);
    }else{
        console.log("MYSQL CONNECTED...");
    }
});

//Define Routes
app.use('/', require('./routes/pages'));
app.use('/', require('./routes/auth'));

app.use('/public', express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/send', (req,res) => {
    const output = `
        <p>Новый заказ</p>
        <ul>
        <li>Name: ${req.body.client__name}</li>
        <li>Phone: ${req.body.client__phone}</li>
        <li>Products: ${req.body.client__order}</li>
        </ul>
    `;
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'itsnursat@gmail.com', // generated ethereal user
          pass: 'Zhezktl19', // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
      });
    
      // send mail with defined transport object
      let info = transporter.sendMail({
        from: '"DIAMONDO" <itsnursat@gmail.com>', // sender address
        to: "jihoh44767@febula.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.render('jewellery', {msg:'Заказ принят'});
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

app.listen(5016, () => {
    console.log("Server started on Port 5016");
}); 

