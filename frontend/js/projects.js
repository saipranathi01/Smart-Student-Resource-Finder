var topic = localStorage.getItem("selectedTopic");

document.getElementById("project-title").innerText =
"Top GitHub Projects for " + topic;

fetch(
    "https://api.github.com/search/repositories?q=" +
    topic +
    "&sort=stars&order=desc"
)
.then(function(res){
    return res.json();
})
.then(function(data){

    var html = "";

    for(var i = 0; i < 10; i++){

        html += `
        <div class="project-card">

            <h3>${data.items[i].name}</h3>

         <p>
${(data.items[i].description || "No description available")
.substring(0,150)}
...
</p>
            <p>
                ⭐ ${data.items[i].stargazers_count}
            </p>

            <a
              href="${data.items[i].html_url}"
              target="_blank">
              View Repository
            </a>

        </div>
        `;
    }

    document.getElementById(
        "projects-container"
    ).innerHTML = html;

});