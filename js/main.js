class ProjectCard extends HTMLElement {
    constructor(){
      super()
    }
    connectedCallback(){
      var shadow = this.attachShadow( { mode: 'closed' } );
      var templateElem = document.getElementById('ProjectCardTemplate');
      var content = templateElem.content.cloneNode(true);
      
      content.querySelector('.authors').innerText = this.authors;
    //   content.querySelector('.article-date').innerText = this.email;
      content.querySelector('.section-subheading').innerText = this.title;
      content.querySelector('.circulate').innerText = this.circulate;
      content.querySelector('.abstract').innerText = this.abstract;
      content.querySelector('.status').innerText = this.status;
    //   content.querySelector('.pub').href = this.href;
      shadow.appendChild(content);
    }
  }
window.customElements.define('project-card', ProjectCard);   

function createComponentsList(targetElementID, data){
    const target = document.getElementById(targetElementID);
    list = data.map( item => {
        const el = document.createElement("project-card");
        el.title = item.title;
        el.circulate = item.circulate;
        el.authors = item.authors;
        el.status = item.status || '';
        el.abstract = item.abstract;
        item.href && (el.href = item.href || '');
        return el;
    });
    target.append.apply(target, list);
}

const { working_projects, teaching, publication } = window.global_data;

createComponentsList('projects_list', working_projects);
createComponentsList('publication_list', publication);
createComponentsList('teaching_list', teaching);

const btn = document.querySelector('.navbar-toggler');
const nav = document.querySelector('.navbar-collapse');
btn.addEventListener('click', ()=> {
    if(btn.getAttribute('aria-expanded') === 'false') {
        nav.classList.add('show');
        btn.classList.add('collapsed');
        btn.setAttribute('aria-expanded', 'true');
    }else{
        nav.classList.remove('show')
        btn.classList.remove('collapsed');
        btn.setAttribute('aria-expanded', 'false');
    }
});