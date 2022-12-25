const { poolPromise } = require('../config/config')
const sql = require('mssql')
exports.create = async (req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Benefits', sql.NVarChar,  req.Benefits) 
    rs.query(`INSERT INTO InsurancePolicyBenefits
         ( Benefits) VALUES
          (@Benefits)`)
    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT * FROM InsurancePolicyBenefits`)
    return rs.recordset;
}

exports.update = async (id, req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Benefit_Id', sql.Int,  id)
    rs.input('Benefits', sql.NVarChar,  req.Benefits) 
   
    rs.query(`UPDATE InsurancePolicyBenefits SET
                Benefits = @Benefits            
                WHERE Benefit_Id =@Benefit_Id`);

    return rs.rowsAffected;
}

exports.delete = async (id) => {
    
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Benefit_Id', sql.Int,  id)
    rs.query(`DELETE FROM InsurancePolicyBenefits
                WHERE Benefit_Id = @Benefit_Id`)

    return rs.rowsAffected;
}

// exports.readById = async(id) =>{
//     console.log('df',id)
//     const pool = await poolPromise;
//     const rs = await pool.request()
//     rs.input('Benefit_Id', sql.Int,  id)
//     rs.query(`SELECT *
//                     FROM InsurancePolicyBenefits 
//                     WHERE Benefit_Id = @Benefit_Id`);
//     console.log(rs.recordset)
//             return rs.recordset;
// }
    