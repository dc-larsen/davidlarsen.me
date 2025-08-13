import{r as i,f as w,c as u,o as d,e as f,a as n,g as y,u as l,t as m,h as S,v as C,i as P,j as H,n as L,_ as $,b as j}from"./DssrbTyR.js";import{u as T}from"./Ch66X7Ep.js";const A={class:"mac-window w-full h-[32rem] overflow-hidden"},B={class:"terminal h-full"},I={class:"terminal-content"},R={key:0,class:"output whitespace-pre-wrap mb-2"},D={class:"flex items-center"},W={class:"text-muted"},z={__name:"TerminalWindow",setup(h){const e=i(""),a=i(""),r=i([]),v=i("[david~]$"),c=i(null),t={Help:"help",Clear:"clear",History:"history",About:"whoami",Resume:"skills",Projects:"projects"};w(()=>{e.value=`${p()}
Enter 'help' for list of commands
`,c.value&&c.value.focus()});async function b(){const s=a.value.trim().toLowerCase();if(!/^[a-zA-Z0-9\s\-_]*$/.test(s)){e.value="Invalid command format",a.value="";return}if(s!=="")switch(r.value.unshift(s),r.value.length>10&&(r.value=r.value.slice(0,10)),a.value="",s){case t.Help:e.value=g();break;case t.Clear:e.value="";break;case t.History:e.value=k();break;case t.About:e.value=p();break;case t.Resume:e.value=_();break;case t.Projects:await L("/projects");break;default:e.value=`Command: '${s}' not found`;break}}function g(){return`List of tasks with descriptions
    ${t.Clear}    - clears output window
    ${t.History}  - list previous commands entered by user
    ${t.About}   - about the user
    ${t.Resume}   - prints resume content of the user
    ${t.Projects} - navigate to personal projects`}function k(){let s="Recent commands entered (last 10)";return r.value.forEach(o=>{s+=`
	${o}`}),s}function p(){return`A little bit about David Larsen:

    Location   =    Baltimore, MD 🦀

    Role       =    Customer Support & Success Leader
                    Building stronger teams, solving tricky problems
                    Leading global support orgs at high-growth startups

    Background = {  Technical troubleshooting (APIs, logs, infrastructure),
                    Scalable ops systems design,
                    Team mentoring & leadership,
                    High-stakes technical issue resolution  }

    Free Time  = {  Chasing my sheepadoodle Goku 🐶 around Patterson Park,
                    Exploring Baltimore coffee shops,
                    Reading about systems design,
                    Hunting for Baltimore's best breakfast sandwich  }`}function _(){return`Experience and Skills:
    Core Expertise = {
        Customer Support & Success Leadership,
        Technical Troubleshooting,
        Team Building & Mentoring,
        Operations Systems Design
    }
    Tools & Platforms = {
        Salesforce,
        Zendesk,
        Splunk,
        Postman,
        SQL,
        Kubernetes,
        Zapier,
        Jira
    }
    Specializations = {
        Support org scaling & efficiency ⚙️,
        High-stakes technical issue resolution 🚨,
        Workflow automation & tooling ✍️,
        APIs, logs & infrastructure troubleshooting,
        Cross-functional team leadership
    }
    
     Resume available in navigation menu!`}return(s,o)=>(d(),u("div",A,[o[1]||(o[1]=f('<div class="mac-window-bar"><div class="mac-circles"><div class="mac-circle"></div></div><div class="mac-title-bar"><span class="text-xs font-medium text-gray-600">[david~]$</span></div></div>',1)),n("div",B,[n("div",I,[l(e)?(d(),u("div",R,m(l(e)),1)):y("",!0),n("div",D,[n("span",W,m(l(v))+" ",1),S(n("input",{"onUpdate:modelValue":o[0]||(o[0]=x=>H(a)?a.value=x:null),class:"command-input flex-1",onKeyup:P(b,["enter"]),ref_key:"terminalInput",ref:c,autocomplete:"off",spellcheck:"false"},null,544),[[C,l(a)]])])])])]))}},E=""+new URL("pro.DZ6561Fe.png",import.meta.url).href,V={class:"flex flex-col lg:flex-row items-center justify-center min-h-[80vh] gap-8"},M={class:"desktop-only lg:block hidden lg:w-2/3 w-full"},N={__name:"index",setup(h){return T({title:"Home"}),(e,a)=>{const r=z;return d(),u("div",V,[a[0]||(a[0]=f('<div class="text-center lg:text-left lg:w-1/3" data-v-45257502><div class="mb-8" data-v-45257502><img class="pro-pic mx-auto lg:mx-0 mb-6" alt="David Larsen - Customer Support Leader" src="'+E+'" width="175" height="175" data-v-45257502><h1 class="text-4xl lg:text-5xl font-bold mb-4 text-primary" data-v-45257502> Hey there! I&#39;m David. </h1><p class="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed" data-v-45257502> Customer support &amp; success leader in Baltimore. Supporting teams, building processes, and solving problems. </p></div><div class="flex justify-center lg:justify-start space-x-4 mb-8" data-v-45257502><a href="https://www.linkedin.com/in/david-larsen-404622143/" target="_blank" rel="noopener noreferrer" class="btn-link fab fa-linkedin fa-2x" aria-label="LinkedIn Profile" title="Connect on LinkedIn" data-v-45257502></a><a href="https://github.com/dc-larsen" target="_blank" rel="noopener noreferrer" class="btn-link fab fa-github fa-2x" aria-label="GitHub Profile" title="View GitHub Projects" data-v-45257502></a><a href="https://www.flickr.com/photos/203372618@N08/" target="_blank" rel="noopener noreferrer" class="btn-link fab fa-flickr fa-2x" aria-label="Flickr Photos" title="Photography on Flickr" data-v-45257502></a><a href="https://open.spotify.com/user/dc2larsen" target="_blank" rel="noopener noreferrer" class="btn-link fab fa-spotify fa-2x" aria-label="Spotify Profile" title="Music on Spotify" data-v-45257502></a><a href="https://worldofwarcraft.blizzard.com/en-us/character/us/proudmoore/fizzl%C3%AA/" target="_blank" rel="noopener noreferrer" class="btn-link wow-icon fa-2x" aria-label="World of Warcraft Character" title="WoW Character Profile" data-v-45257502></a></div></div>',1)),n("div",M,[j(r)])])}}},G=$(N,[["__scopeId","data-v-45257502"]]);export{G as default};
