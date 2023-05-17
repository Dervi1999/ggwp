const db=require('../db')

class SheduleController {
    // методы 


    async createShedule(req,res){
        const {id,day,week,id_para,cabinet,id_plan}=req.body
        const newShedule=await db.query(`INSERT INTO public.shedule (id, "day", week, id_para, cabinet, id_plan) VALUES($1, $2, $3, $4, $5, $6);`,[id, day, week, id_para, cabinet, id_plan])
        res.json(newShedule.rows[0])

    }
    
    async getAllShedules(req,res){
        const shedules=await db.query('select * from shedule s ')
        res.json(shedules.rows)

    }
    async getOneShedule(req,res){
        const id =req.params.id
        const shedule=await db.query('select * from shedule s where s.id=$1',[id])
        res.json(shedule.rows[0])

    }
    async updateShedule(req,res){
        const {id,day,week,id_para,cabinet,id_plan}=req.body
        const shedule=await db.query('UPDATE public.shedule SET "day"=$1, week=$2, id_para=$3, cabinet=$4, id_plan=$5 WHERE id=$6;',[day,week,id_para,cabinet,id_plan,id])
        res.json(shedule.rows[0])

    }
    async deleteShedule(req,res){
        /*DELETE FROM public.shedule WHERE id=0; */
        const id =req.params.id
        const shedule=await db.query('DELETE FROM public.shedule WHERE id=$1; ',[id])
        res.json(shedule.rows[0])

    }

}

module.exports =new SheduleController()