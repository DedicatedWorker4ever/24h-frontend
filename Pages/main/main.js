document.addEventListener("DOMContentLoaded", loadCandidates);


function loadCandidates(){
document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault();
    
    let partiesOption = document.getElementById("partiesOption").value;
    let url ="";
    const output = document.querySelector('.out')

    if(partiesOption > 7){
    url = `http://localhost:8080/api/candidates/getCandidates`;
    }else{
    url = `http://localhost:8080/api/candidates/getCandidates/${partiesOption}`;
    }
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(content => {
        document.querySelector('.out').textContent = '';
        console.log(content)

         content.forEach(candidate => {

             const candidateInfo = document.createElement("div");
             const partyNameExists = document.getElementById(candidate.party.partyName);

             const link = `<h2>${candidate.party.partyName}</h2>`;

             const name = document.createElement("ul");
             name.innerHTML = `<li class="name">${candidate.firstName} ${candidate.secondName}</li>
             <button>Edit</button><button class"btnDelete" id=${candidate.candidateId} onClick="deleteC(this.id)>Delete</button>`;

             if(partyNameExists){
                partyNameExists.appendChild(name);
             }else{
                candidateInfo.innerHTML += link;
                candidateInfo.id = candidate.party.partyName;
                candidateInfo.appendChild(name);
                output.insertAdjacentElement("afterbegin", candidateInfo);
             }

         })

      });
    });
}

// function deleteC(clicked_id)
//   {
//       alert(clicked_id);
//   }