var topic = localStorage.getItem("selectedTopic");

document.getElementById("project-title").innerHTML =
`Top GitHub Projects for <span class="highlight-topic">${topic}</span>`;

fetch(
    "https://api.github.com/search/repositories?q=" +
    topic +
    "+tutorial&sort=stars&order=desc"
)
.then(function(res){
    return res.json();
})
.then(function(data){

    var html = "";
    var count = 0;

    for(let i = 0; i < data.items.length; i++){

        let repo = data.items[i];

        // Skip repos without description
        if(!repo.description){
            continue;
        }

        // Skip Chinese/Japanese/Korean descriptions
        if(/[^\x00-\x7F]/.test(repo.description)){
            continue;
        }

        html += `
        <div class="project-card">

            <h3>${repo.name}</h3>

            <p>
                ${(repo.description).substring(0,120)}...
            </p>

            <p>
                ⭐ ${repo.stargazers_count}
            </p>

            <a
                href="${repo.html_url}"
                target="_blank">
                View Repository
            </a>

        </div>
        `;

        count++;

        if(count === 10){
            break;
        }
    }

    document.getElementById("projects-container").innerHTML = html;

})
.catch(function(error){
    console.log(error);

    document.getElementById("projects-container").innerHTML =
    "<h2>Unable to load projects.</h2>";
});