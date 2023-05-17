const express=require("express")        // Подключаем express чтобы сервер мог получать запросы
const PORT=process.env.PORT || 8080     // Получаем порт из системных переменных либо же делаем его по умолчанию 8080 
const app=express()                     // из express создаем сам сервер
const sheduleRouter=require('./routes/shedule.route')

/*
Тестовый запрос
app.get('/api',(req,res)=>{
    res.send('Hello w')
})*/

app.use(express.json())
app.use('/api',sheduleRouter)





// Прослушиваем порт и выводим в консоль сообщение о запуске сервера
app.listen(PORT, ()=>console.log(`server started on port ${PORT}`))