CREATE PROCEDURE dbo.deleteUser(@User_Id INT)
AS
BEGIN
	DELETE FROM db1.dbo.UserDetails WHERE User_Id = @User_Id;
END;

EXEC deleteUser 1;
SELECT * FROM db1.dbo.UserDetails;
SELECT * FROM db1.dbo.InsurancePolicyEndorsementUserId;

CREATE PROCEDURE dbo.deleteAgent(@Agent_Id INT)
AS
BEGIN
	DELETE FROM db1.dbo.Agent WHERE Agent_Id = @Agent_Id;
END;

EXEC deleteAgent 1;

CREATE PROCEDURE dbo.deleteInsurancePolicy(@Policy_Id INT)
AS
BEGIN
	DELETE FROM db1.dbo.InsurancePolicy WHERE Policy_Id = @Policy_Id;
END;
EXEC deleteInsurancePolicy 1;