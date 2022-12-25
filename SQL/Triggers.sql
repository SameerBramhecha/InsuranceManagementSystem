CREATE TRIGGER dbo.IPI ON db1.dbo.InsurancePolicy
FOR INSERT
AS
BEGIN
	DECLARE @Policy_Id INT;
	DECLARE @Type VARCHAR(50);
	DECLARE @Premium INT;
	DECLARE @Duration INT;
	DECLARE @Policy_Limit INT;
	DECLARE @Benefit_Id INT;
	DECLARE @Drawback_Id INT;
	SELECT @Policy_Id = Policy_Id from inserted;
	SELECT @Type = Type from inserted;
	SELECT @Premium = Premium from inserted;
	SELECT @Duration = Duration from inserted;
	SELECT @Policy_Limit = Policy_Limit from inserted;
	SELECT @Benefit_Id = Benefit_Id from inserted;
	SELECT @Drawback_Id = Drawback_Id from inserted;

	INSERT INTO db1.dbo.logInsurancePolicy VALUES(@Policy_Id,@Type,@Premium,@Duration,@Policy_Limit,@Benefit_Id,@Drawback_Id);
END;

CREATE TRIGGER dbo.IPU ON db1.dbo.InsurancePolicy
FOR UPDATE
AS
BEGIN
	DECLARE @Policy_Id INT;
	DECLARE @Type VARCHAR(50);
	DECLARE @Premium INT;
	DECLARE @Duration INT;
	DECLARE @Policy_Limit INT;
	DECLARE @Benefit_Id INT;
	DECLARE @Drawback_Id INT;
	SELECT @Policy_Id = Policy_Id from inserted;
	SELECT @Type = Type from inserted;
	SELECT @Premium = Premium from inserted;
	SELECT @Duration = Duration from inserted;
	SELECT @Policy_Limit = Policy_Limit from inserted;
	SELECT @Benefit_Id = Benefit_Id from inserted;
	SELECT @Drawback_Id = Drawback_Id from inserted;

	INSERT INTO db1.dbo.logInsurancePolicy VALUES(@Policy_Id,@Type,@Premium,@Duration,@Policy_Limit,@Benefit_Id,@Drawback_Id);
END;

CREATE TRIGGER dbo.ci ON db1.dbo.UserDetails
FOR INSERT,UPDATE
AS
BEGIN
	DECLARE @User_Id INT;
	DECLARE @User_Name VARCHAR(30);
	DECLARE	@Address XML;
	DECLARE	@Age INT;
	DECLARE	@Contact_No VARCHAR(50);
	DECLARE	@Email_Id VARCHAR(30);
	DECLARE	@User_Type VARCHAR(30);
	DECLARE @Password VARCHAR(30);
	SELECT @User_Id = User_Id from inserted;
	SELECT @User_Name =User_Name  from inserted;
	SELECT @Address = Address from inserted;
	SELECT @Age  = Age from inserted;
	SELECT @Contact_No = Contact_No from inserted;
	SELECT @Email_Id = Email_Id from inserted;
	SELECT @User_Type = User_Type from inserted;
	SELECT @Password = Password from inserted;
	INSERT INTO db1.dbo.logUserDetails VALUES(@User_Id,@User_Name,@Contact_No,@Email_Id,@Address,@Age,@User_Type,@Password);

END;

CREATE TRIGGER dbo.ai ON db1.dbo.Agent
FOR INSERT,UPDATE
AS
BEGIN
	DECLARE @Agent_Id INT;
	DECLARE @Agent_Name VARCHAR(30);
	DECLARE	@Address XML;
	DECLARE	@Contact_No VARCHAR(50);
	DECLARE	@Email_Id VARCHAR(30);
	SELECT @Agent_Id =Agent_Id from inserted;
	SELECT @Agent_Name =Agent_Name   from inserted;
	SELECT @Contact_No = Contact_No from inserted;
	SELECT @Email_Id = Email_Id from inserted;
	SELECT @Address = Address from inserted;
	
	INSERT INTO db1.dbo.logAgent VALUES(@Agent_Id,@Agent_Name ,@Contact_No,@Email_Id,@Address);

END;