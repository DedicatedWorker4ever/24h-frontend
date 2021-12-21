document.addEventListener("DOMContentLoaded", createCandidates);

function createCandidates(){
    document.getElementById("btnCreate").addEventListener("click", ev => {
        ev.preventDefault();

        const partiesOption = document.getElementById("partiesOption2").value;
        const firstName = document.getElementById("fname").value;
        const lastName = document.getElementById("lname").value;
        const numberOfVotes = document.getElementById("nOfVotes").value;
      //  const output = document.querySelector('.out')

        let data = {
            "candidateVotes": numberOfVotes,
            "firstName": `${firstName}`,
            "party": {
              "partyId": partiesOption
            },
            "secondName": `${lastName}`
          };

        fetch("http://localhost:8080/api/candidates/addCandidate", {
        method: "POST",
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
        }).then(res => {
        console.log("Request complete! response:", res);
        });
        
    });
}