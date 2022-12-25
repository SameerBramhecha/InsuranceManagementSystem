const { poolPromise } = require('../config/config')
const sql = require('mssql')
exports.create = async (req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Agent_Id', sql.Int,  req.Agent_Id)
    rs.input('Agent_Name', sql.NVarChar,  req.Agent_Name) 
    rs.input( 'Contact_No', sql.NVarChar,   req.Contact_No)
    rs.input('Email_Id', sql.NVarChar,  req.Email_Id)
    rs.input('Address', sql.NVarChar,  req.Address)
    rs.query(`INSERT INTO Agent
         ( Agent_Name,Contact_No,Email_Id,Address) VALUES
          ( @Agent_Name,@Contact_No,@Email_Id,@Address)`)
    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT * FROM Agent`)
    return rs.recordset;
}

exports.update = async ( req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Agent_Id', sql.Int,  req.Agent_Id)
    rs.input('Agent_Name', sql.NVarChar,  req.Agent_Name) 
    rs.input( 'Contact_No', sql.NVarChar,   req.Contact_No)
    rs.input('Email_Id', sql.NVarChar,  req.Email_Id)
    rs.input('Address', sql.NVarChar,  req.Address)
    rs.query(`UPDATE Agent SET
                Agent_Name = @Agent_Name  , Contact_No = @Contact_No, Email_Id = @Email_Id , Address =@Address               
                WHERE Agent_Id = @Agent_Id`);

    return rs.rowsAffected;
}

exports.delete = async (req) => {
    
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('Agent_Id', sql.Int,  req.Agent_Id)
    rs.query(`DELETE FROM Agent
                WHERE Agent_Id = @Agent_Id`)

    return rs.rowsAffected;
}
exports.readById = async (req) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
            .input('Agent_Id', sql.Int, req.Agent_Id)
        .query(`SELECT * FROM Agent where Agent_Id=@Agent_Id`)
    return rs.recordset;
}  



