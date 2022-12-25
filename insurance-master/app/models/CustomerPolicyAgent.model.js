const { poolPromise } = require('../config/config')
const sql = require('mssql')
exports.create = async (req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    console.log('user',req.User_Id)
    console.log('pol',req.Policy_Id)
    console.log('agent',req.Agent_Id)
    rs.input( 'User_Id', sql.Int,   req.User_Id)
    rs.input( 'Policy_Id', sql.Int,   req.Policy_Id)
    rs.input('Agent_Id', sql.Int,  req.Agent_Id)  

    rs.query(`INSERT INTO UserPolicyAgentId
         ( User_Id,Policy_Id, Agent_Id) VALUES
          (@User_Id,@Policy_Id,@Agent_Id)`)
    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT * FROM UserPolicyAgentId`)
    return rs.recordset;
}

    exports.view = async () => {
        const pool = await poolPromise;
        const rs = await pool
            .request()
           .execute('P1')
        return rs.recordset;
    }

