// INSERT INTO [dbo].[UserDetails]
//            ([User_Id]
//            ,[User_Name]
//            ,[Contact_No]
//            ,[Email_Id]
//            ,[Address]
//            ,[Age]
//            ,[User_Type])
//      VALUES
//            (
//            1,'Harry','+74839758', 'harry@gmail.com','<city>Pune</city>',21,'customer')


const { poolPromise } = require('../config/config')
const sql = require('mssql')
exports.create = async (req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    // rs.input('Policy_Id', sql.Int,  req.Policy_Id)
    
    rs.input('User_Name', sql.NVarChar,  req.User_Name) 
    rs.input('User_Type', sql.NVarChar,  req.User_Type) 
    rs.input( 'Address', sql.NVarChar,  req.Address)
    rs.input('Age', sql.Int,  req.Age)
    rs.input('Contact_No', sql.NVarChar,  req.Contact_No)
    rs.input('Email_Id', sql.NVarChar,  req.Email_Id)
    rs.input('Password', sql.NVarChar,  req.Password)
    rs.query(`INSERT INTO UserDetails
         ( User_name,User_Type, Address,Age,Contact_No,Email_Id, Password) VALUES
          (@User_name,@User_Type,@Address,@Age,@Contact_No,@Email_Id, @Password)`)
    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT * FROM UserDetails`)
        // console.log(rs.recordset)
    return rs.recordset;
}

exports.update = async ( req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('User_Id', sql.Int,  req.User_Id)
    rs.input('User_Type', sql.NVarChar,  req.User_Type) 
    rs.input('User_Name', sql.NVarChar,  req.User_Name) 
    rs.input( 'Address', sql.NVarChar,  req.Address)
    rs.input('Age', sql.Int,  req.Age)
    rs.input('Contact_No', sql.NVarChar,  req.Contact_No)
    rs.input('Email_Id', sql.NVarChar,  req.Email_Id)
    rs.input('Password', sql.NVarChar,  req.Password)
    rs.query(`UPDATE UserDetails SET
                User_name = @User_name  ,User_Type = @User_Type ,  
                Address = @Address, Age = @Age , Contact_No =@Contact_No,
                Email_Id =@Email_Id, Password = @Password          
                WHERE User_Id =@User_Id`);
    return rs.rowsAffected;
}

exports.delete = async (req) => {
    
    const pool = await poolPromise;
    const rs = await pool.request()
    rs.input('User_Id', sql.Int,  req.User_Id)
    rs.query(`DELETE FROM UserDetails
                WHERE User_Id = @User_Id`)

    return rs.rowsAffected;
}

exports.readById = async (req) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
            .input('User_Id', sql.Int, req.User_Id)
        .query(`SELECT * FROM UserDetails where User_Id=@User_Id`)
    return rs.recordset;
}  

