fetch("/data/resources.json")
.then(function(res){
    return res.json();
})
.then(function(data){

    var searchBar =
    document.getElementById("search-bar");

    var suggestions =
    document.getElementById("suggestions");

    searchBar.addEventListener("input", function(){

        var query =
        searchBar.value.toLowerCase();

        var html = "";

        for(var i=0;i<data.length;i++){

            if(
                data[i].topic
                .toLowerCase()
                .startsWith(query)
            ){

                html += `
                <div class="suggestion-item"
                onclick="selectTopic('${data[i].topic}')">

                    ${data[i].topic}

                </div>
                `;
            }
        }

        suggestions.innerHTML = html;

    });

});

function selectTopic(topic){

    localStorage.setItem(
        "selectedTopic",
        topic
    );

    window.location.href =
    "/pages/resources.html";
}