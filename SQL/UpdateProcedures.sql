--PROCEDURE TO UPDATE User'S  Address
CREATE PROCEDURE dbo.updateUserAddress(
	@User_Id INT,
	@Address XML)
AS
BEGIN
	UPDATE db1.dbo.UserDetails SET Address= @Address where User_Id = @User_Id;
END;

EXEC updateUserAddress 1,'<Address Address="2" />';
SELECT * FROM db1.dbo.UserDetails;

--Procedure to update Users Password
CREATE PROCEDURE dbo.updatePassword(
	@User_Id INT,
	@Password VARCHAR(30))
AS 
BEGIN
	UPDATE db1.dbo.UserDetails SET Password = @Password WHERE User_Id = @User_Id;
END;

EXEC updatePassword 1,'abcd';

--PROCEDURE TO UPDATE User'S CONTACT NUMBER
CREATE PROCEDURE dbo.updateUserContact(
	@User_Id INT,
	@Contact_No VARCHAR(50))
AS
BEGIN
	UPDATE db1.dbo.UserDetails SET Contact_No = @Contact_No WHERE User_Id = @User_Id;
END;

EXEC updateUserContact 1,2222222222;
SELECT * FROM db1.dbo.UserDetails;

--PROCEDURE TOM UPDATE AGENT'S ADDRESS
CREATE PROCEDURE dbo.updateAgentAddress(
	@Agent_Id INT,
	@Address XML)
AS
BEGIN
	UPDATE db1.dbo.Agent SET Address= @Address where Agent_Id = @Agent_Id;
END;

EXEC updateAgentAddress 1,'<Address Address="3" />';
SELECT * FROM db1.dbo.Agent;

--PROCEDURE TOM UPDATE AGENT'S CONTACT NUMBER
CREATE PROCEDURE dbo.updateAgentContact(
	@Agent_Id INT,
	@Contact_No VARCHAR(50))
AS
BEGIN
	UPDATE db1.dbo.Agent SET Contact_No = @Contact_No WHERE Agent_Id = @Agent_Id;
END;

EXEC updateAgentContact 1,2222222222;
SELECT * FROM db1.dbo.Agent;

--PROCEDURE TO UPDATE INSURANCE_POLICY PREMIUM
CREATE PROCEDURE dbo.updatePolicyPremium(
	@Policy_Id INT,
	@Premium INT)
AS
BEGIN
	UPDATE db1.dbo.InsurancePolicy SET Premium = @Premium WHERE Policy_Id = @Policy_Id;
END;

EXEC updatePolicyPremium 1,20000;
SELECT * FROM db1.dbo.InsurancePolicy;

--PROCEDURE TO UPDATE INSURANCE_POLICY DURATION
CREATE PROCEDURE dbo.updatePolicyDuration(
	@Policy_Id INT,
	@Duration INT)
AS
BEGIN
	UPDATE db1.dbo.InsurancePolicy SET Duration = @Duration WHERE Policy_Id = @Policy_Id;
END;

EXEC updatePolicyDuration 1,3;
SELECT * FROM db1.dbo.InsurancePolicy;


--PROCEDURE TO UPDATE INSURANCE_POLICY POLICY_LIMIT
CREATE PROCEDURE dbo.updatePolicy_Limit(
	@Policy_Id INT,
	@Policy_Limit INT)
AS
BEGIN
	UPDATE db1.dbo.InsurancePolicy SET Policy_Limit = @Policy_Limit WHERE Policy_Id = @Policy_Id;
END;

EXEC updatePolicy_Limit 1,3000;
SELECT * FROM db1.dbo.InsurancePolicy;
SELECT * FROM db1.dbo.logInsurancePolicy;


