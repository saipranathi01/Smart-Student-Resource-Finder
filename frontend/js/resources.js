var topic = localStorage.getItem("selectedTopic");

fetch("/data/resources.json")
.then(function(res){
    return res.json();
})
.then(function(data){

    for(var i=0;i<data.length;i++){

        if(data[i].topic === topic){

            document.getElementById("topic-name").innerText =
            data[i].topic;

            document.getElementById("roadmap-link").href =
            data[i].roadmap;

            document.getElementById("documentation-link").href =
            data[i].documentation;

            document.getElementById("practice-link").href =
            data[i].practice;

            var html = "";

            if(data[i].interview){

                for(var j=0;j<data[i].interview.length;j++){

                    html += `
                    <li>${data[i].interview[j]}</li>
                    `;
                }
            }

            document.getElementById("interview-list").innerHTML =
            html;
        }
    }

});