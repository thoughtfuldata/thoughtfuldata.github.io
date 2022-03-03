 let d_path = "./data.json";


async function fetchData() {
    const resp = await fetch(d_path);
    let d_json = await resp.json();

    return d_json;
}

fetchData()
    .then(data => {
        let card = document.getElementsByClassName("cards");
        let last = document.getElementsByClassName("row");

        for (let i = 0; i < card.length; i++) {
            let img = card[i].getElementsByTagName("img")[0];
            let header = card[i].getElementsByTagName("h2")[0];
            let p = card[i].getElementsByTagName("p")[0];

            img.src = "images/" + data["section2"][i]["image"];
            header.innerHTML = data["section2"][i]["heading"];
            p.innerHTML = data["section2"][i]["text"];
        }
        // last section
        for (let i = 0; i < last.length; i++) {
            let img = last[i].getElementsByTagName("img")[0];
            let header = last[i].getElementsByTagName("h2")[0];
            let p = last[i].getElementsByTagName("p")[0];

            img.src = "images/" + data["section4"][i]["image"];
            header.innerHTML = data["section4"][i]["heading"];
            p.innerHTML = data["section4"][i]["text"];
        }
    });