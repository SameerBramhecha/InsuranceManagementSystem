CREATE TABLE db1.dbo.UserDetails(
	User_Id INT IDENTITY(1,1) PRIMARY KEY,
	User_Name VARCHAR(30) NOT NULL,
	Contact_No VARCHAR(50) NOT NULL,
	Email_Id VARCHAR(30) NOT NULL,
	Address XML NOT NULL,
	Age INT NOT NULL,
	User_Type VARCHAR(30) NOT NULL,
	Password VARCHAR(30) NOT NULL
);
CREATE TABLE db1.dbo.UserType(User_Type VARCHAR(30) PRIMARY KEY);

ALTER TABLE	db1.dbo.UserDetails
ADD FOREIGN KEY (User_Type) REFERENCES UserType(User_Type);

INSERT INTO db1.dbo.UserType VALUES('admin');
INSERT INTO db1.dbo.UserType VALUES('customer');
SELECT * FROM db1.dbo.UserType;

CREATE TABLE db1.dbo.Agent(
	Agent_Id INT IDENTITY(1,1) PRIMARY KEY,
	Agent_Name VARCHAR(30) NOT NULL,
	Contact_No VARCHAR(50) NOT NULL,
	Email_Id VARCHAR(30) NOT NULL,
	Address XML
);

CREATE TABLE db1.dbo.InsurancePolicyBenefits(
	Benefit_Id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	Benefits text NOT NULL
);


CREATE TABLE db1.dbo.InsurancePolicyDrawbacks(
	Drawback_Id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	Drawbacks text NOT NULL
);

CREATE TABLE db1.dbo.InsurancePolicy(
	Policy_Id INT IDENTITY(1,1) PRIMARY KEY,
	Type VARCHAR(50) NOT NULL,
	Premium INT NOT NULL,
	Duration INT NOT NULL,
	Policy_Limit INT NOT NULL,
	Benefit_Id INT,
	Drawback_Id INT
);

CREATE TABLE db1.dbo.PolicyType(Type VARCHAR(50) PRIMARY KEY);
INSERT INTO db1.dbo.PolicyType VALUES('Life Insurance');
INSERT INTO db1.dbo.PolicyType VALUES('Vehicle Insurance');
INSERT INTO db1.dbo.PolicyType VALUES('Health Insurance');
INSERT INTO db1.dbo.PolicyType VALUES('Home Insurance');
INSERT INTO db1.dbo.PolicyType VALUES('Fire Insurance');
INSERT INTO db1.dbo.PolicyType VALUES('Travel Insurance');

SELECT * FROM db1.dbo.PolicyType;

ALTER TABLE	db1.dbo.InsurancePolicy
ADD FOREIGN KEY (Type) REFERENCES PolicyType(Type) ON DELETE CASCADE;

ALTER TABLE db1.dbo.InsurancePolicy
ADD FOREIGN KEY (Benefit_Id) REFERENCES InsurancePolicyBenefits(Benefit_Id) ON DELETE CASCADE;

ALTER TABLE db1.dbo.InsurancePolicy
ADD FOREIGN KEY (Drawback_Id) REFERENCES InsurancePolicyDrawbacks(Drawback_Id) ON DELETE CASCADE;

CREATE TABLE db1.dbo.Payments(
	Payment_Id INT IDENTITY(1,1) PRIMARY KEY,
	User_Id INT NOT NULL,
	Policy_Id INT NOT NULL,
	Date DATE NOT NULL,
	Amount INT NOT NULL,
	Payment_Type VARCHAR(30) NOT NULL
);

ALTER TABLE db1.dbo.Payments
ADD FOREIGN KEY (User_Id) REFERENCES UserDetails(User_Id) ON DELETE CASCADE;

ALTER TABLE db1.dbo.Payments
ADD FOREIGN KEY (Policy_Id) REFERENCES InsurancePolicy(Policy_Id) ON DELETE CASCADE;

CREATE TABLE db1.dbo.UserPolicyAgentId(
	Policy_Id INT NOT NULL,
	User_Id INT NOT NULL,
	Agent_Id INT NOT NULL,
);
ALTER TABLE db1.dbo.UserPolicyAgentId
ADD FOREIGN KEY (Policy_Id) REFERENCES InsurancePolicy(Policy_Id) ON DELETE CASCADE;

ALTER TABLE db1.dbo.UserPolicyAgentId
ADD FOREIGN KEY (User_Id) REFERENCES UserDetails(User_Id) ON DELETE CASCADE;

ALTER TABLE db1.dbo.UserPolicyAgentId
ADD FOREIGN KEY (Agent_Id) REFERENCES Agent(Agent_Id) ON DELETE CASCADE;

CREATE TABLE db1.dbo.Endorsements(
	Endorsement_Id INT IDENTITY(1,1) PRIMARY KEY,
	Type VARCHAR(50) NOT NULL,
	Benefit_Desc TEXT NOT NULL
);

CREATE TABLE db1.dbo.EndorsementType(Type VARCHAR(50));
INSERT INTO db1.dbo.EndorsementType VALUES('Monetary');
INSERT INTO db1.dbo.EndorsementType VALUES('Non-Monetary');

CREATE TABLE db1.dbo.InsurancePolicyEndorsementUserId(
	Policy_Id INT NOT NULL,
	User_Id INT NOT NULL,
	Endorsement_Id INT,
);

ALTER TABLE db1.dbo.InsurancePolicyEndorsementUserId
ADD FOREIGN KEY (Policy_Id) REFERENCES InsurancePolicy(Policy_Id) ON DELETE CASCADE;

ALTER TABLE db1.dbo.InsurancePolicyEndorsementUserId
ADD FOREIGN KEY (User_Id) REFERENCES UserDetails(User_Id) ON DELETE CASCADE;

ALTER TABLE db1.dbo.InsurancePolicyEndorsementUserId
ADD FOREIGN KEY (Endorsement_Id) REFERENCES Endorsements(Endorsement_Id);

CREATE TABLE db1.dbo.logInsurancePolicy(
	Policy_Id INT,
	Type VARCHAR(50) NOT NULL,
	Premium INT NOT NULL,
	Duration INT NOT NULL,
	Policy_Limit INT NOT NULL,
	Benefit_Id INT,
	Drawback_Id INT
);

CREATE TABLE db1.dbo.logUserDetails(
	User_Id INT,
	User_Name VARCHAR(30) NOT NULL,
	Contact_No VARCHAR(50) NOT NULL,
	Email_Id VARCHAR(30) NOT NULL,
	Address XML NOT NULL,
	Age INT NOT NULL,
	User_Type VARCHAR(30) NOT NULL,
	Password VARCHAR(30) NOT NULL
);


CREATE TABLE db1.dbo.logAgent(
	Agent_Id INT,
	Agent_Name varchar(30),
	Contact_No VARCHAR(50) ,
	Email_Id VARCHAR(30),
	Address XML
);

SELECT * FROM INFORMATION_SCHEMA.TABLES;