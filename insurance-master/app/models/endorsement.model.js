const { poolPromise } = require('../config/config')
const sql = require('mssql')
exports.create = async (req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Type', sql.NVarChar,  req.Type) 
    rs.input( 'Benefit_Desc', sql.NVarChar,   req.Benefit_Desc)
    rs.query(`INSERT INTO Endorsements
         ( Type,Benefit_Desc) VALUES
          (@Type,@Benefit_Desc)`)
    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT * FROM Endorsements`)
    return rs.recordset;
}

exports.update = async ( req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Endorsement_Id', sql.Int, req.Endorsement_Id)
    rs.input('Type', sql.NVarChar,  req.Type) 
    rs.input( 'Benefit_Desc', sql.NVarChar,   req.Benefit_Desc)
   
    rs.query(`UPDATE Endorsements SET
                Type = @Type  , Benefit_Desc = @Benefit_Desc WHERE Endorsement_Id = @Endorsement_Id`);

    return rs.rowsAffected;
}

exports.delete = async (req) => {
    
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Endorsement_Id', sql.Int,  req.Endorsement_Id)
    rs.query(`DELETE FROM Endorsements
                WHERE Endorsement_Id = @Endorsement_Id`)

    return rs.rowsAffected;
}


exports.readById = async (req) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
            .input('Endorsement_Id', sql.Int, req.Endorsement_Id)
        .query(`SELECT * FROM Endorsements where Endorsement_Id=@Endorsement_Id`)
    return rs.recordset;
}  