document.addEventListener("DOMContentLoaded", editCandidate);

function getCandidatesSelector(){

   const urlC = `http://localhost:8080/api/candidates/getCandidates`;
   const candidatesSel = document.getElementById("candidatesSel");
   
      fetch(urlC)
      .then(response => response.json())
      .then(content => {
   
         content.forEach(candidate => {
            console.log(candidate);
   
             const candidateInfo = document.createElement("option");
   
             candidateInfo.innerHTML = `${candidate.firstName} ${candidate.secondName}`;
   
                candidateInfo.value = candidate.candidateId;
                candidatesSel.appendChild(candidateInfo);
             
         })
      });
   }


function editCandidate(){
    document.getElementById("btnEdit").addEventListener("click", ev => {
        ev.preventDefault();

        const candidateId = document.getElementById("candidatesSel").value;
        const firstName = document.getElementById("fname").value;
        const lastName = document.getElementById("lname").value;
        const numberOfVotes = document.getElementById("nOfVotes").value;
      //  const output = document.querySelector('.out')

        let data = {
            "candidateVotes": numberOfVotes,
            "firstName": `${firstName}`,
            "secondName": `${lastName}`
          };

        fetch(`http://localhost:8080/api/candidates/editCandidate/${candidateId}`, {
        method: "PUT",
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
        }).then(res => {
          if(res.status === 200){
            window.alert("Success!");
         }else{
            window.alert(`Somethign went wrong... Error ${res.status}`);
         }
        console.log("Request complete! response:", res);
        });
        
    });
}

getCandidatesSelector();