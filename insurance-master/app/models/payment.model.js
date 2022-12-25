const { poolPromise } = require('../config/config')
const sql = require('mssql')
exports.create = async (req) => {
    const pool = await poolPromise;
    const rs = await pool.request()
    // rs.input('Policy_Id', sql.Int,  req.Policy_Id)
    rs.input('Payment_Type', sql.NVarChar,  req.Payment_Type) 
    rs.input( 'User_Id', sql.Int,   req.User_Id)
    rs.input( 'Policy_Id', sql.Int,   req.Policy_Id)
    rs.input('Amount', sql.Int,  req.Amount)
    rs.input("Date", sql.DateTime, new Date())    

    rs.query(`INSERT INTO Payments
         ( Payment_Type, User_Id,Policy_Id, Amount, Date) VALUES
          (@Payment_Type,@User_Id,@Policy_Id,@Amount,@Date)`)
            
            
    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT * FROM Payments`)
    return rs.recordset;
}

// exports.update = async (id, req) => {
//     const pool = await poolPromise;
//     const rs = await pool.request()
//     rs.input('Payment_Id', sql.Int,  id)
//     rs.input('Payment_Type', sql.NVarChar,  req.Payment_Type) 
//     rs.input( 'Customer_Id', sql.Int,   req.Customer_Id)
//      rs.input( 'Policy_Id', sql.Int,   req.Policy_Id)
//     rs.input('Amount', sql.Int,  req.Amount)
//     rs.input('Date', sql.DateTime, new Date())
//     rs.query(`UPDATE Payments SET
//                 Payment_Type = @Payment_Type  , Customer_Id = @Customer_Id, Policy_Id = @Policy_Id, Amount = @Amount , Date =@Date               
//                 WHERE Payment_Id =@Payment_Id`);

//     return rs.rowsAffected;
// }

// exports.delete = async (req) => {
    
//     const pool = await poolPromise;
//     const rs = await pool.request()
//     rs.input('Payment_Id', sql.Int, req.Payment_Id)
//     rs.query(`DELETE FROM Payments
//                 WHERE Payment_Id = @Payment_Id`)

//     return rs.rowsAffected;
// }

// exports.readById = async (req) => {
//     const pool = await poolPromise;
//     const rs = await pool
//         .request()
//             .input('Payment_Id', sql.Int, req.Payment_Id)
//         .query(`SELECT * FROM Payments where Payment_Id=@Payment_Id`)
//     return rs.recordset;
// }


// exports.readById = async(id) =>{
//     console.log('df',id)
//     const pool = await poolPromise;
//     const rs = await pool.request()
//     rs.input('Policy_Id', sql.Int,  id)
//     rs.query(`SELECT *
//                     FROM Payments 
//                     WHERE Policy_Id = @Policy_Id`);
//     console.log(rs.recordset)
//             return rs.recordset;
// }
    