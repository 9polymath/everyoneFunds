pragma solidity >=0.4.17 < 0.7.0;

contract everyoneFunds{
    address[] public deployedCampaigns;
    uint256 public indexOf;

    function createCampaign(uint256 minimum, uint256 target) public{
      address newCampaign = new Crowdfunding(minimum, msg.sender, target);
       deployedCampaigns.push(newCampaign);
       indexOf = deployedCampaigns.length - 1;
    }

    function getDeployedCampaigns() public view returns(address []){
            return (deployedCampaigns);

    }
    function removeDeployedCampaign(uint256 index) public returns(address []){
        delete deployedCampaigns[index];
    }
}

contract Crowdfunding{
    struct Request{
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address =>bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint256 public minimumContribution;
    uint256 public targetContribution;
    mapping(address => bool) public approvers;
    uint256 public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Crowdfunding(uint256 minimum, address creator, uint256 target) public {
        manager = creator;
        minimumContribution = minimum;
        targetContribution = target;
    }

    function contribute() public payable{
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string memory description, uint256 value, address recipient) public restricted{
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }

    function approveRequest(uint256 index)  public {
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;

    }

    function finalizeRequest(uint256 index) public restricted{
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount/2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;

    }

    function getSummary() public view returns (uint256, uint256, uint256, uint256, uint256, address) {
        return(
        minimumContribution,
        targetContribution,
        this.balance,
        requests.length,
        approversCount,
        manager
        );
    }

    function getRequestsCount() public view returns(uint256){
        return requests.length;
    }

    function endCrowdfunding() public restricted{
        require(this.balance == 0);
        selfdestruct(address(this));
    }

}
