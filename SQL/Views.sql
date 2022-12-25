CREATE VIEW dbo.view1
AS
SELECT dbo.Agent.Agent_Name, dbo.InsurancePolicy.Type, dbo.InsurancePolicy.Premium, dbo.InsurancePolicy.Duration,dbo.InsurancePolicy.Policy_Limit, dbo.UserDetails.User_Name
FROM     dbo.Agent INNER JOIN
                  dbo.UserPolicyAgentId ON dbo.Agent.Agent_Id = dbo.UserPolicyAgentId.Agent_Id INNER JOIN
                  dbo.InsurancePolicy ON dbo.UserPolicyAgentId.Policy_Id = dbo.InsurancePolicy.Policy_Id INNER JOIN
                  dbo.UserDetails ON dbo.UserPolicyAgentId.User_Id = dbo.UserDetails.User_Id;

SELECT * FROM dbo.view1;


CREATE VIEW dbo.view2
AS
SELECT dbo.InsurancePolicy.Type AS Policy_Type, dbo.InsurancePolicy.Premium, dbo.InsurancePolicy.Duration, dbo.InsurancePolicy.Policy_Limit, dbo.UserDetails.User_Name, dbo.Endorsements.Type AS Endorsement_Type, dbo.Endorsements.Benefit_Desc
FROM     dbo.InsurancePolicyEndorsementUserId INNER JOIN
                  dbo.InsurancePolicy ON dbo.InsurancePolicyEndorsementUserId.Policy_Id = dbo.InsurancePolicy.Policy_Id INNER JOIN
                  dbo.UserDetails ON dbo.InsurancePolicyEndorsementUserId.User_Id = dbo.UserDetails.User_Id INNER JOIN
                  dbo.Endorsements ON dbo.InsurancePolicyEndorsementUserId.Endorsement_Id = dbo.Endorsements.Endorsement_Id CROSS JOIN
                  dbo.EndorsementType;
SELECT * FROM dbo.view2;

CREATE VIEW dbo.IP
AS
SELECT dbo.InsurancePolicy.Policy_Id, dbo.InsurancePolicy.Premium, dbo.InsurancePolicy.Type, 
dbo.InsurancePolicy.Duration, dbo.InsurancePolicy.Policy_Limit, dbo.InsurancePolicyBenefits.Benefits, 
dbo.InsurancePolicyDrawbacks.Drawbacks
FROM dbo.InsurancePolicy INNER JOIN dbo.InsurancePolicyBenefits ON
dbo.InsurancePolicy.Benefit_Id = dbo.InsurancePolicyBenefits.Benefit_Id INNER JOIN
dbo.InsurancePolicyDrawbacks ON 
dbo.InsurancePolicy.Drawback_Id = dbo.InsurancePolicyDrawbacks.Drawback_Id;

SELECT * from dbo.IP;

CREATE PROCEDURE dbo.P1
AS
BEGIN
	SELECT * FROM dbo.view1;
END;

CREATE PROCEDURE dbo.P2
AS
BEGIN
	SELECT * FROM dbo.view2;
END;

CREATE PROCEDURE dbo.P3
AS
BEGIN
	SELECT * FROM dbo.IP;
END;



