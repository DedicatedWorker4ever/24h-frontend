document.addEventListener("DOMContentLoaded", loadCandidates);
let voteCount = 0;

function loadCandidates(){
document.getElementById("btnResults").addEventListener("click", ev => {
    ev.preventDefault();
    
    let url ="";
    const output = document.querySelector('.out')

    url = `http://localhost:8080/api/parties/get-all`;

    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(content => {
        document.querySelector('.out').textContent = '';
        console.log(content)

         content.forEach(vote => {

             const voteInfo = document.createElement("div");

             const link = `<h2>${vote.partyName}</h2>`;

             const name = document.createElement("ul");
             name.innerHTML = `<li class="name">Number of votes : ${vote.numberOfVotes}</li>`;
            voteCount += vote.numberOfVotes;

             voteInfo.innerHTML += link;
             voteInfo.id = vote.partyName;
             voteInfo.appendChild(name);
            output.insertAdjacentElement("afterbegin", voteInfo);
      });
    });
})}

