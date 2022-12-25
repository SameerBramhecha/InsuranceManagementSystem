const { poolPromise } = require('../config/config')
const sql = require('mssql')
exports.create = async (req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input( 'User_Id', sql.Int,   req.User_Id)
    rs.input( 'Policy_Id', sql.Int,   req.Policy_Id)
    rs.input('Endorsement_Id', sql.Int,  req.Endorsement_Id)  

    rs.query(`INSERT INTO InsurancePolicyEndorsementUserId
         (  User_Id,Policy_Id, Endorsement_Id) VALUES
          ( @User_Id,@Policy_Id,@Endorsement_Id)`)
    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT * FROM InsurancePolicyEndorsementUserId`)
    return rs.recordset;
}

exports.update = async (id, req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('PEU_Id', sql.Int,  id)
    rs.input( 'User_Id', sql.Int,   req.User_Id)
     rs.input( 'Policy_Id', sql.Int,   req.Policy_Id)
    rs.input('Endorsement_Id', sql.Int,  req.Endorsement_Id)
    rs.query(`UPDATE InsurancePolicyEndorsementUserId SET
                User_Id = @User_Id, Policy_Id = @Policy_Id, Endorsement_Id = @Endorsement_Id              
                WHERE PEU_Id =@PEU_Id`);

    return rs.rowsAffected;
}

exports.delete = async (id) => {
    
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('PEU_Id', sql.Int,  id)
    rs.query(`DELETE FROM InsurancePolicyEndorsementUserId
                WHERE PEU_Id = @PEU_Id`)

    return rs.rowsAffected;
}

    exports.view = async () => {
        const pool = await poolPromise;
        const rs = await pool
            .request()
           .execute('P2')
        return rs.recordset;
    }
