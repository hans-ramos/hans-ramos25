d
db.collection('others').get().then((snapshot)=> {
    snapshot.docs.forEach(doc => {
        getIntro(doc);
    })
})
function getIntro(doc){
    let parent = document.getElementById("about");
    let data = doc.data();
    
    let about = document.createElement("div");
    let intro = document.createElement("p");
    intro.setAttribute("id","intro");
    intro.classList.add("center-text");
    let pic = document.createElement("img");
    pic.classList.add("rounded-circle", "float-left", "img-fluid","profile_pic");
    intro.innerHTML = data.intro;
    pic.src= data.picture;
    
    about.appendChild(pic);
    about.appendChild(intro);
    parent.appendChild(about);
}

db.collection('educations').orderBy('years').get().then((snapshot)=> {
    snapshot.docs.forEach(doc => {
        getEducation(doc);
    })
})

function getEducation(doc){
    let parent = document.getElementById("education");
    let data = doc.data();
    let school = document.createElement("div");
    school.classList.add("px-1");
    let logo = document.createElement("img");
    logo.classList.add("logo", "float-left", "m-2");
    let list = document.createElement("ul");
    let schoolName = document.createElement("li");
    schoolName.setAttribute("id", "school");
    let level = document.createElement("li");
    level.setAttribute("id","level");
    let years = document.createElement("li");
    years.setAttribute("id","years");

    logo.src = data.logo;
    schoolName.innerHTML = data.school;
    level.innerHTML = data.level;
    years.innerHTML = data.years;

    school.appendChild(logo);
    list.appendChild(schoolName);
    list.appendChild(level);
    list.appendChild(years);
    school.appendChild(list)
    parent.appendChild(school);
}

db.collection('organizations').orderBy('name').get().then((snapshot)=> {
    snapshot.docs.forEach(doc => {
        getOrganization(doc);
    })
})

function getOrganization(doc){
    let parent = document.getElementById("organizations");
    let data = doc.data();
    let org = document.createElement("div");
    let list = document.createElement("ul");
    let orgName = document.createElement("li");
    let position = document.createElement("li");
    let years = document.createElement("li");
    let yearStart = document.createElement("span");
    let yearEnd = document.createElement("span");
    orgName.setAttribute("id", "name");
    position.setAttribute("id","position");
    yearStart.setAttribute("id","year_started");
    yearEnd.setAttribute("id","year_ended");

    orgName.innerHTML = data.name;
    position.innerHTML = ("Position: " + data.position);
    yearStart.innerHTML = data.year_started;
    yearEnd.innerHTML = data.year_ended;
    years.innerHTML = ("Years active: " + yearStart.innerHTML + "-" + yearEnd.innerHTML);

    list.appendChild(orgName);
    list.appendChild(position);
    list.appendChild(years);
    org.appendChild(list);
    parent.appendChild(org);
}

db.collection('works').orderBy('title').get().then((snapshot)=> {
    snapshot.docs.forEach(doc => {
        getWork(doc);
    })
})

function getWork(doc){
    let parent = document.getElementById("works");
    let data = doc.data();
    let work = document.createElement("div");
    let list = document.createElement("ul");
    let title = document.createElement("li");
    let year = document.createElement("li");
    let desc = document.createElement("li");
    let link = document.createElement("a");
    let githubLink = document.createElement("li");
    title.setAttribute("id", "title");
    year.setAttribute("id","year_started");
    desc.setAttribute("id","description");
    link.setAttribute("id","link");

    title.innerHTML = data.title;
    year.innerHTML = data.year_started;
    desc.innerHTML = data.description;
    link.href = data.link;
    link.innerHTML = data.title;
    githubLink.innerHTML = ("Github Link: ");

    list.appendChild(title);
    list.appendChild(year);
    list.appendChild(desc);
    githubLink.appendChild(link);
    list.appendChild(githubLink);
    work.appendChild(list);
    parent.appendChild(work);
}

db.collection('others').get().then((snapshot)=> {
    snapshot.docs.forEach(doc => {
        getContacts(doc);
    })
})

function getContacts(doc){
    let parent = document.getElementById("contacts");
    let data = doc.data(); 
    let list = document.createElement("ul");
    let fb_bullet = document.createElement("li");
    let fb_link = document.createElement("a");
    let fb_div = document.createElement("div");
    let git_bullet = document.createElement("li");
    let git_link = document.createElement("a");
    let git_div = document.createElement("div");
    let li_bullet = document.createElement("li");
    let li_link = document.createElement("a");
    let li_div = document.createElement("div");
    fb_div.setAttribute("id","facebook");
    fb_div.classList.add("my-2");
    git_div.setAttribute("id","github");
    git_div.classList.add("my-2");
    li_div.setAttribute("id","linkedin");
    li_div.classList.add("my-2");

    fb_link.href = data.facebook;
    git_link.href = data.github;
    li_link.href = data.linkedin;

    fb_link.appendChild(fb_div);
    git_link.appendChild(git_div);
    li_link.appendChild(li_div);

    fb_bullet.appendChild(fb_link);
    git_bullet.appendChild(git_link);
    li_bullet.appendChild(li_link);

    list.appendChild(fb_bullet);
    list.appendChild(git_bullet);
    list.appendChild(li_bullet);
    parent.append(list);
}