const { poolPromise } = require('../config/config')
const sql = require('mssql')
exports.create = async (req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Drawbacks', sql.NVarChar,  req.Drawbacks) 
    rs.query(`INSERT INTO InsurancePolicyDrawbacks
         ( Drawbacks) VALUES
          (@Drawbacks)`)
    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT * FROM InsurancePolicyDrawbacks`)
    return rs.recordset;
}

exports.update = async (id, req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Drawback_Id', sql.Int,  id)
    rs.input('Drawbacks', sql.NVarChar,  req.Drawbacks) 
   
    rs.query(`UPDATE InsurancePolicyDrawbacks SET
                Drawbacks = @Drawbacks            
                WHERE Drawback_Id =@Drawback_Id`);

    return rs.rowsAffected;
}

exports.delete = async (id) => {
    
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Drawback_Id', sql.Int,  id)
    rs.query(`DELETE FROM InsurancePolicyDrawbacks
                WHERE Drawback_Id = @Drawback_Id`)

    return rs.rowsAffected;
}

// exports.readById = async(id) =>{
//     console.log('df',id)
//     const pool = await poolPromise;
//     const rs = await pool.request()
//     rs.input('Drawback_Id', sql.Int,  id)
//     rs.query(`SELECT *
//                     FROM InsurancePolicyDrawbacks 
//                     WHERE Drawback_Id = @Drawback_Id`);
//     console.log(rs.recordset)
//             return rs.recordset;
// }
    