const { poolPromise } = require('../config/config')
const sql = require('mssql')
exports.create = async (req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Policy_Id', sql.Int,  req.Policy_Id)
    rs.input('Type', sql.NVarChar,  req.Type) 
    rs.input( 'Premium', sql.Int,   req.Premium)
    rs.input('Duration', sql.Int,  req.Duration)
    rs.input('Policy_Limit', sql.Int,  req.Policy_Limit)
    rs.input('Benefit_Id', sql.Int,  req.Benefit_Id)
    rs.input('Drawback_Id', sql.Int,  req.Drawback_Id)
   

    rs.query(`INSERT INTO InsurancePolicy
         (  Type, Premium, Duration, Policy_Limit,Benefit_Id,Drawback_Id) VALUES
          ( @Type,@Premium,@Duration,@Policy_Limit,@Benefit_Id,@Drawback_Id)`)
          	
          	
    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT * FROM InsurancePolicy`)
    return rs.recordset;
}

exports.update = async (req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Policy_Id', sql.Int,  req.Policy_Id)
    rs.input('Type', sql.NVarChar,  req.Type) 
    rs.input( 'Premium', sql.Int,   req.Premium)
    rs.input('Duration', sql.Int,  req.Duration)
    rs.input('Policy_Limit', sql.Int,  req.Policy_Limit)
    rs.input('Benefit_Id', sql.Int,  req.Benefit_Id)
    rs.input('Drawback_Id', sql.Int,  req.Drawback_Id)
   
    rs.query(`UPDATE InsurancePolicy SET
                Type = @Type  , Premium = @Premium, Duration = @Duration , 
                Policy_Limit =@Policy_Limit,Benefit_Id=@Benefit_Id,Drawback_Id=@Drawback_Id               
                WHERE Policy_Id =@Policy_Id`);

    return rs.rowsAffected;
}

exports.delete = async (req) => {
    
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Policy_Id', sql.Int,  req.Policy_Id)
    rs.query(`DELETE FROM InsurancePolicy
                WHERE Policy_Id = @Policy_Id`)

    return rs.rowsAffected;
}

exports.readById = async (req) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
            .input('Policy_Id', sql.Int, req.Policy_Id)
        .query(`SELECT * FROM InsurancePolicy where Policy_Id=@Policy_Id`)
    return rs.recordset;
}

exports.view = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
       .execute('P3')
    return rs.recordset;
}


// let  pool = await  await poolPromise;
//     let  rs = await  pool.request()
//     .input('Policy_Id', sql.Int, id)
//     .query("SELECT * from InsurancePolicy where Policy_Id = @Policy_Id");
//     return  rs.recordsets;
    