document.addEventListener("DOMContentLoaded", deleteCandidates);


function getCandidatesSelector(){

const urlC = `http://localhost:8080/api/candidates/getCandidates`;
const candidatesSel = document.getElementById("candidatesSel");

   fetch(urlC)
   .then(response => response.json())
   .then(content => {

      content.forEach(candidate => {

          const candidateInfo = document.createElement("option");

          candidateInfo.innerHTML = `${candidate.firstName} ${candidate.secondName}`;

             candidateInfo.value = candidate.candidateId;
             candidatesSel.appendChild(candidateInfo);
          
      })
   });
}

function deleteCandidates(){
document.getElementById("btnDelete").addEventListener("click", ev => {
    ev.preventDefault();
    
    let candidateId = document.getElementById("candidatesSel").value;
    let url =`http://localhost:8080/api/candidates/deleteCandidate/${candidateId}`;


    fetch(url, {
      method: "DELETE",
      headers: {'Accept': 'application/json',
      'Content-Type': 'application/json'}, 
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