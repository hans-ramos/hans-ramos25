// var firebaseConfig = {
//     apiKey: "AIzaSyC40PHQz0i1SMGDe7_T3hfRvDCmzW43HBs",
//     authDomain: "ccapdev-resume-e6d6d.firebaseapp.com",
//     databaseURL: "https://ccapdev-resume-e6d6d.firebaseio.com",
//     projectId: "ccapdev-resume-e6d6d",
//     storageBucket: "ccapdev-resume-e6d6d.appspot.com",
//     messagingSenderId: "56710526730",
//     appId: "1:56710526730:web:825af4bddef85f9013ecf3"
// };
// var defaultProject = firebase.initializeApp(firebaseConfig);
// var db = firebase.firestore()
function school_form(){
    document.getElementById("main_container").classList.add("d-none");
    document.getElementById("add_school_div").classList.remove("d-none");
}

const schoolform = document.querySelector('#add_school_form');
schoolform.addEventListener('submit',(e) =>{
    e.preventDefault();
    db.collection('educations').add({
        school: schoolform.schoolName_input.value,
        level: schoolform.level_input.value,
        years: schoolform.years_input.value,
        logo: schoolform.schoolLogo_input.value
    })
    schoolform.reset();
    document.getElementById("add_school_div").classList.add("d-none");
    document.getElementById("main_container").classList.remove("d-none");
})

function cancel_add_school(){
    schoolform.reset();
    document.getElementById("add_school_div").classList.add("d-none");
    document.getElementById("main_container").classList.remove("d-none");
}


function org_form(){
    document.getElementById("main_container").classList.add("d-none");
    document.getElementById("add_org_div").classList.remove("d-none");
}

const orgform = document.querySelector('#add_org_form');
orgform.addEventListener('submit',(e) =>{
    e.preventDefault();
    db.collection('organizations').add({
        name: orgform.orgName_input.value,
        position: orgform.position_input.value,
        year_started: orgform.orgYearsStart_input.value,
        year_ended: orgform.orgYearsEnd_input.value
    })
    orgform.reset();
    document.getElementById("add_org_div").classList.add("d-none");
    document.getElementById("main_container").classList.remove("d-none");
})

function cancel_add_org(){
    orgform.reset();
    document.getElementById("add_org_div").classList.add("d-none");
    document.getElementById("main_container").classList.remove("d-none");
}


function work_form(){
    document.getElementById("main_container").classList.add("d-none");
    document.getElementById("add_work_div").classList.remove("d-none");
}

const workform = document.querySelector('#add_work_form');
workform.addEventListener('submit',(e) =>{
    e.preventDefault();
    db.collection('works').add({
        title: workform.workTitle_input.value,
        year_started: workform.workStarted_input.value,
        description: workform.description_input.value,
        link: workform.workLink_input.value
    })
    workform.reset();
    document.getElementById("add_work_div").classList.add("d-none");
    document.getElementById("main_container").classList.remove("d-none");
})

function cancel_add_work(){
    workform.reset();
    document.getElementById("add_work_div").classList.add("d-none");
    document.getElementById("main_container").classList.remove("d-none");
}



function intro_form(){
    document.getElementById("main_container").classList.add("d-none");
    document.getElementById("edit_intro_div").classList.remove("d-none");
    document.getElementById("intro_area").value = document.getElementById("intro").innerHTML;
}

const introform = document.querySelector('#edit_intro_form');
introform.addEventListener('submit',(e) =>{
    e.preventDefault();
    db.collection('others').doc('OvLHZizFUklqA1QNxMYK').update({
        intro: introform.intro_input.value
    })
    introform.reset();
    document.getElementById("edit_intro_div").classList.add("d-none");
    document.getElementById("main_container").classList.remove("d-none");
})

function cancel_edit_intro(){
    introform.reset();
    document.getElementById("edit_intro_div").classList.add("d-none");
    document.getElementById("main_container").classList.remove("d-none");
}




function contacts_form(){
    document.getElementById("main_container").classList.add("d-none");
    document.getElementById("edit_contacts_div").classList.remove("d-none");
    document.getElementById("facebook_area").value = document.getElementById("fb_link").href;
    document.getElementById("github_area").value = document.getElementById("git_link").href;
    document.getElementById("linkedin_area").value = document.getElementById("li_link").href;
}

const contactsform = document.querySelector('#edit_contacts_form');
contactsform.addEventListener('submit',(e) =>{
    e.preventDefault();
    db.collection('others').doc('OvLHZizFUklqA1QNxMYK').update({
        facebook: contactsform.facebook_input.value,
        github: contactsform.github_input.value,
        linkedin: contactsform.linkedin_input.value,
    })
    contactsform.reset();
    document.getElementById("edit_contacts_div").classList.add("d-none");
    document.getElementById("main_container").classList.remove("d-none");
})

function cancel_edit_contacts(){
    contactsform.reset();
    document.getElementById("edit_contacts_div").classList.add("d-none");
    document.getElementById("main_container").classList.remove("d-none");
}



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
    school.setAttribute('data-id', doc.id);
    school.classList.add("px-1", "col-12", "my-2");
    let logo = document.createElement("img");
    logo.classList.add("logo", "float-left", "m-2");
    let list = document.createElement("ul");
    let schoolName = document.createElement("li");
    schoolName.setAttribute("id", "school");
    let level = document.createElement("li");
    level.setAttribute("id","level");
    let years = document.createElement("li");
    years.setAttribute("id","years");
    let button = document.createElement("button");
    button.setAttribute("id","delete_school");
    button.classList.add("bg-secondary", "text-dark","btn","mx-auto","float-right");

    logo.src = data.logo;
    schoolName.innerHTML = data.school;
    level.innerHTML = data.level;
    years.innerHTML = data.years;
    button.innerHTML = "Delete";

    school.appendChild(button);
    school.appendChild(logo);
    list.appendChild(schoolName);
    list.appendChild(level);
    list.appendChild(years);
    school.appendChild(list)
    parent.appendChild(school);

    button.addEventListener('click',(e)=>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('educations').doc(id).delete();
    })
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
    org.setAttribute('data-id', doc.id);
    org.classList.add("col-12", "my-2");
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
    let button = document.createElement("button");
    button.setAttribute("id","delete_org");
    button.classList.add("bg-secondary", "text-dark","btn","mx-auto","float-right");

    orgName.innerHTML = data.name;
    position.innerHTML = ("Position: " + data.position);
    yearStart.innerHTML = data.year_started;
    yearEnd.innerHTML = data.year_ended;
    years.innerHTML = ("Years active: " + yearStart.innerHTML + "-" + yearEnd.innerHTML);
    button.innerHTML = "Delete";

    org.appendChild(button);
    list.appendChild(orgName);
    list.appendChild(position);
    list.appendChild(years);
    org.appendChild(list);
    parent.appendChild(org);

    button.addEventListener('click',(e)=>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('organizations').doc(id).delete();
    })
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
    work.setAttribute('data-id',doc.id);
    work.classList.add("col-12","my-2");
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
    let button = document.createElement("button");
    button.setAttribute("id","delete_work");
    button.classList.add("bg-secondary", "text-dark","btn","float-right");

    title.innerHTML = data.title;
    year.innerHTML = data.year_started;
    desc.innerHTML = data.description;
    link.href = data.link;
    link.innerHTML = data.title;
    githubLink.innerHTML = ("Github Link: ");
    button.innerHTML = "Delete";

    work.appendChild(button);
    list.appendChild(title);
    list.appendChild(year);
    list.appendChild(desc);
    githubLink.appendChild(link);
    list.appendChild(githubLink);
    work.appendChild(list);
    parent.appendChild(work);

    button.addEventListener('click',(e)=>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('works').doc(id).delete();
    })
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
    fb_link.setAttribute("id","fb_link");
    git_div.setAttribute("id","github");
    git_div.classList.add("my-2");
    git_link.setAttribute("id","git_link");
    li_div.setAttribute("id","linkedin");
    li_div.classList.add("my-2");
    li_link.setAttribute("id","li_link");

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