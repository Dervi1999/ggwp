const Router=require('express')
const router=new Router()   // создаём экземпляр объекта Router
const sheduleController=require("../controllers/shedule.controller")

// для каждой функции определим маршрут 
// 1 параметр - маршрут
// 2 парметр - метод
router.post('/shedule',sheduleController.createShedule)
router.get('/shedule',sheduleController.getAllShedules)
router.get('/shedule/:id',sheduleController.getOneShedule)
router.put('/shedule',sheduleController.updateShedule)
router.delete('/shedule/:id',sheduleController.deleteShedule)

// экспортируем router
module.exports=router