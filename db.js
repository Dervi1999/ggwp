const Pool=require("pg").Pool

const pool=new Pool({
    host: "176.56.14.200",
    user: "prb07",
    password: "prb07",
    database: "user7",
    port:5432
})

module.exports=pool