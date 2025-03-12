function createContactCard(person) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");

    div.className = "contactCard";
    img.src = "./files/images/contacts/" + person.Bild;
    img.alt = person.Namn;
    h1.innerText = person.Namn;
    h2.innerText = person.Post;

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(h2);

    if (person.Email) {
        let a = document.createElement("a");
        let email = person.Email;
        a.href = "mailto:" + email;
        a.innerText = email;
        div.appendChild(a);
    }

    return div;
}

const addContacts = async () => {
    let contactPage = document.getElementById("main-kontakt");
    const response = await fetch('./files/contacts.json');
    const contacts = await response.json();
    for (const person of contacts) {
        contactPage.appendChild(createContactCard(person));
    }
};

addContacts();