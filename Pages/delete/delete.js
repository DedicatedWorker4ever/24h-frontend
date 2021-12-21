document.addEventListener("DOMContentLoaded", deleteCandidates);


function deleteCandidates(){
document.getElementById("btnDelete").addEventListener("click", ev => {
    ev.preventDefault();
    
    let candidateId = document.getElementById("candidateId").value;
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
