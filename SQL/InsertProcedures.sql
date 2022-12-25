

CREATE PROCEDURE dbo.insertUserDetails
	(
	@User_Name VARCHAR(30),
	@Contact_No VARCHAR(50),
	@Email_Id VARCHAR(30),
	@Address XML,
	@Age INT,
	@User_Type VARCHAR(30),
	@Password VARCHAR(30)
	)
AS
BEGIN
 INSERT INTO db1.dbo.UserDetails VALUES(@User_Name,@Contact_No,@Email_Id,@Address,@Age,@User_Type,@Password);
END;

CREATE PROCEDURE dbo.insertAgent
	(
	@Agent_Name varchar(30),
	@Contact_No VARCHAR(50),
	@Email_Id VARCHAR(30),
	@Address XML)
AS
BEGIN
	INSERT INTO db1.dbo.Agent VALUES(@Agent_Name,@Contact_No,@Email_Id,@Address);
END;

CREATE PROCEDURE dbo.insertInsurancePolicyBenefits(
	@Benefits text)
AS
BEGIN 
	INSERT INTO db1.dbo.InsurancePolicyBenefits VALUES(@Benefits);
END;

CREATE PROCEDURE dbo.insertInsurancePolicyDrawbacks(
	@Drawbacks text)
AS
BEGIN 
	INSERT INTO db1.dbo.InsurancePolicyDrawbacks VALUES(@Drawbacks);
END;


CREATE PROCEDURE dbo.insertInsurancePolicy
	(
	@Type VARCHAR(50),
	@Premium INT,
	@Duration INT,
	@Policy_Limit INT,
	@Benefit_Id INT,
	@Drawback_Id INT
	)
AS
BEGIN 
	INSERT INTO db1.dbo.InsurancePolicy VALUES (@Type,@Premium,@Duration,@Policy_Limit,@Benefit_Id,@Drawback_Id);
END;

CREATE PROCEDURE dbo.insertEndorsements(
	@Type VARCHAR(50),
	@Benefit_Desc TEXT)
AS
BEGIN
	INSERT INTO db1.dbo.Endorsements VALUES(@Type,@Benefit_Desc);
END;

CREATE PROCEDURE dbo.insertPayments(
	@Customer_Id INT,
	@Policy_Id INT,
	@Date DATE,
	@Amount INT,
	@Payment_Type VARCHAR(30))
AS
BEGIN
	INSERT INTO db1.dbo.Payments VALUES(@Customer_Id,@Policy_Id,@Date,@Amount,@Payment_Type);
END;


CREATE PROCEDURE dbo.insertUserPolicyAgentId(
	@Policy_Id INT,
	@User_Id INT,
	@Agent_Id INT
)
AS
BEGIN
	INSERT INTO db1.dbo.UserPolicyAgentId VALUES(@Policy_Id,@User_Id,@Agent_Id);
END;

CREATE PROCEDURE dbo.insertInsurancePolicyEndorsementUserId(
	@Policy_Id INT,
	@User_Id INT,
	@Endorsement_Id INT
)
AS
BEGIN
	INSERT INTO db1.dbo.InsurancePolicyEndorsementUserId VALUES(@Policy_Id,@User_Id,@Endorsement_Id);
END;

