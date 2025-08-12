import{_ as S}from"./Dh_Z0etW.js";import{_ as B,c as a,o as s,a as t,t as i,e as h,F as y,r as w,f as _,w as T,d as v,g as k,h as f,u as o,i as I,v as D,j as P,k as A,n as j}from"./BY9hTKhk.js";import{u as R}from"./BrtT7gUV.js";const W={class:"bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"},M={class:"relative h-48 sm:h-64 overflow-hidden"},$=["src","alt"],q={class:"absolute top-4 left-4"},F={class:"bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium"},N={class:"p-6"},H={class:"flex items-center text-sm text-gray-500 mb-3"},V=["datetime"],z={class:"text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-200"},Q={class:"text-gray-600 mb-4 line-clamp-3"},U={key:0,class:"flex flex-wrap gap-2 mb-4"},O={class:"flex items-center justify-between"},E={key:1,class:"inline-flex items-center text-secondary hover:text-primary font-medium transition-colors duration-200 cursor-pointer"},G={key:2,class:"text-sm text-gray-500"},K={__name:"BlogCard",props:{post:{type:Object,required:!0}},setup(r){const m=u=>new Date(u).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(u,l)=>{const g=S;return s(),a("article",W,[t("div",M,[t("img",{src:r.post.image,alt:r.post.title,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"},null,8,$),t("div",q,[t("span",F,i(r.post.category),1)])]),t("div",N,[t("div",H,[t("time",{datetime:r.post.date},i(m(r.post.date)),9,V),l[0]||(l[0]=t("span",{class:"mx-2"},"•",-1)),t("span",null,i(r.post.readTime)+" min read",1)]),t("h3",z,i(r.post.title),1),t("p",Q,i(r.post.excerpt),1),r.post.tags&&r.post.tags.length?(s(),a("div",U,[(s(!0),a(y,null,w(r.post.tags,n=>(s(),a("span",{key:n,class:"bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"}," #"+i(n),1))),128))])):h("",!0),t("div",O,[r.post.content?(s(),_(g,{key:0,to:`/blog/${r.post.slug}`,class:"inline-flex items-center text-secondary hover:text-primary font-medium transition-colors duration-200"},{default:T(()=>l[1]||(l[1]=[v(" Read More ",-1),t("svg",{class:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)])),_:1,__:[1]},8,["to"])):(s(),a("div",E,l[2]||(l[2]=[v(" Coming Soon ",-1),t("svg",{class:"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)]))),r.post.author?(s(),a("div",G," by "+i(r.post.author),1)):h("",!0)])])])}}},Z=B(K,[["__scopeId","data-v-e32211e5"]]),X=[{id:1,title:"Thoughts on leadership",slug:"thoughts-on-leadership",excerpt:"Short version: I try to make good work easier. Set the intent, raise the floor, and get out of the way. A deep dive into leader-leader thinking and practical approaches to engineering leadership.",content:`
      <blockquote>
        <p><strong>Author:</strong> David Larsen<br>
        <strong>Published:</strong> August 11, 2025<br>
        <strong>Last updated:</strong> August 11, 2025<br>
        <strong>Reading time:</strong> ~8 minutes</p>
      </blockquote>
      
      <p><strong>Short version:</strong> I try to make good work easier. Set the intent, raise the floor, and get out of the way.</p>
      
      <p>Two things shaped how I lead: David Marquet's <em>Turn the Ship Around!</em> and my time in support engineering at Contrast Security. The book pushed me toward leader-leader thinking. Contrast gave me the reps to put it into practice when things were moving fast.</p>
      
      <h2>Table of contents</h2>
      <ul>
        <li><a href="#intent-over-permission">Intent over permission</a></li>
        <li><a href="#principles-at-a-glance">Principles at a glance</a></li>
        <li><a href="#walkthrough-moving-support-into-qbrs-at-contrast">Walkthrough: moving support into QBRs at Contrast</a></li>
        <li><a href="#language-dos-and-donts">Language do's and don'ts</a></li>
        <li><a href="#post-mortems-that-change-something">Post-mortems that change something</a></li>
        <li><a href="#building-on-strengths-at-synapse">Building on strengths at Synapse</a></li>
        <li><a href="#try-it-yourself">Try it yourself</a></li>
        <li><a href="#next-steps">Next steps</a></li>
      </ul>
      
      <h2 id="intent-over-permission">Intent over permission</h2>
      <p>Leader-leader sounds abstract until you change the language. The quickest unlock I have seen is swapping "Can I…?" for "I intend to…". It forces clear thinking. What is the goal. What is the risk. Where are the guardrails. How do we roll back. When intent statements show up every day, the team stops waiting around. My job becomes coach and unblocker.</p>
      
      <h2 id="principles-at-a-glance">Principles at a glance</h2>
      <table>
        <thead>
          <tr>
            <th>Principle</th>
            <th>What it looks like</th>
            <th>Why it works</th>
            <th>How to try it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Push control to where the info lives</td>
            <td>Decisions made by the person closest to the work</td>
            <td>Faster, fewer translation losses</td>
            <td>Replace approvals with "I intend to…" plus risk and rollback</td>
          </tr>
          <tr>
            <td>Clarity over control</td>
            <td>Clear why, constraints, and definition of done</td>
            <td>People pick better how when the why is visible</td>
            <td>Publish simple briefs and visible checklists</td>
          </tr>
          <tr>
            <td>Certify, not brief</td>
            <td>Pairing, dry runs, and explicit sign-off before solo ownership</td>
            <td>Reduces guesswork under pressure</td>
            <td>Add a two-run rule before someone flies solo</td>
          </tr>
          <tr>
            <td>Short feedback loops</td>
            <td>Post-mortems within 24 hours and visible actions</td>
            <td>Learning compounds, drift shrinks</td>
            <td>Put one doc change and one mechanism change on every Sev1 or Sev2</td>
          </tr>
          <tr>
            <td>Mechanisms, not memos</td>
            <td>Fields, runbooks, automations</td>
            <td>Behaviors stick when encoded</td>
            <td>Add the field, add the step, wire the alert</td>
          </tr>
        </tbody>
      </table>
      
      <h2 id="walkthrough-moving-support-into-qbrs-at-contrast">Walkthrough: moving support into QBRs at Contrast</h2>
      <p>This was not an outage story. It was a growth push. Our department set an aggressive goal to run more QBRs. I was on the support team and had just taken over corporate accounts.</p>
      
      <ol>
        <li><p><strong>State intent</strong><br>
        I told my manager: <em>I intend to have support participate in this initiative with corporate accounts.</em> Clear scope and a clear why.</p></li>
        
        <li><p><strong>Share a lightweight template</strong><br>
        I brought a QBR outline tuned for our customers: a few support metrics tied to value moments, top friction points, and a short roadmap of fixes with owners and dates.</p></li>
        
        <li><p><strong>Run the first rep fast</strong><br>
        We booked the first customer that same week. Short deck. Most of the time spent on actions.</p></li>
        
        <li><p><strong>Feed findings back into the system</strong><br>
        Items flowed to product, docs, and support runbooks. Nothing lived only in slides.</p></li>
        
        <li><p><strong>Scale what worked</strong><br>
        Over the next couple of weeks, support ran QBRs with about half a dozen customers. The win was the role shift. Support showed up as an account partner with real inputs and follow-through.</p></li>
      </ol>
      
      <h2 id="language-dos-and-donts">Language do's and don'ts</h2>
      <table>
        <thead>
          <tr>
            <th>Do</th>
            <th>Do Not</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"I intend to rotate keys for tenant X to close gap Y. Risk is session churn. Rollback is flag off within two minutes."</td>
            <td>"Should I rotate keys?"</td>
          </tr>
          <tr>
            <td>"Ship the fix behind a feature flag so that we can validate with customer A before broad release."</td>
            <td>"We will ship soon."</td>
          </tr>
          <tr>
            <td>"Decision: option B because lower blast radius. We will revisit if error rate exceeds 2%."</td>
            <td>"We picked B."</td>
          </tr>
          <tr>
            <td>"By Friday, outcome is a 20% drop in repeat tickets on topic Z."</td>
            <td>"We will improve Z."</td>
          </tr>
          <tr>
            <td>"Post-mortem action: add runbook step 3 and automate alerting."</td>
            <td>"We will be more careful."</td>
          </tr>
        </tbody>
      </table>
      
      <h2 id="post-mortems-that-change-something">Post-mortems that change something</h2>
      <p>I prefer post-mortem over after-action review. The rule is simple. If nothing changes, we did not learn. Each post-mortem closes with one process change, one doc update, and one automation or alert. We also keep a slim decision log so context does not evaporate when people rotate.</p>
      
      <p><strong>Post-mortem starter (copy and adapt):</strong></p>
      <blockquote>
        <p><em>What happened:</em> Brief timeline with key events</p>
        <p><em>Why it happened:</em> Root causes, not just triggers</p>
        <p><em>What we learned:</em> Concrete insights about our system/process</p>
        <p><em>Actions taken:</em></p>
        <ul>
          <li>Process change: [specific change with owner and date]</li>
          <li>Documentation update: [what was added/changed]</li>
          <li>Technical improvement: [automation/alert/monitoring added]</li>
        </ul>
      </blockquote>
      
      <h2 id="building-on-strengths-at-synapse">Building on strengths at Synapse</h2>
      <p>At Synapse, I inherited a strong foundation. The team was already doing great work - they just needed systems to scale their impact. We focused on three areas:</p>
      
      <ul>
        <li><strong>Knowledge capture:</strong> Moved from Slack threads to searchable documentation</li>
        <li><strong>Decision frameworks:</strong> Created simple templates for common choices</li>
        <li><strong>Feedback loops:</strong> Regular retrospectives with actionable outcomes</li>
      </ul>
      
      <p>The key insight: great people can do amazing work when you remove friction from their path.</p>
      
      <h2 id="try-it-yourself">Try it yourself</h2>
      <p>Start small. Pick one area where your team asks permission frequently. Replace the approval process with an "I intend to..." template that includes:</p>
      
      <ul>
        <li>Clear objective</li>
        <li>Risk assessment</li>
        <li>Rollback plan</li>
        <li>Success metrics</li>
      </ul>
      
      <p>Run it for two weeks. Measure the time saved and decisions made. Adjust the template based on what you learn.</p>
      
      <h2 id="next-steps">Next steps</h2>
      <p>Leadership isn't about having all the answers. It's about creating environments where good answers emerge quickly and safely. The goal isn't to eliminate all mistakes - it's to make them cheap and educational.</p>
      
      <p>What's one place in your team where you could replace "Can I?" with "I intend to?" Start there.</p>
    `,image:"/support-playbooks.png",category:"Leadership",tags:["leadership","management","team-culture","engineering"],date:"2025-08-11",lastUpdated:"2025-08-11",readTime:8,author:"David Larsen"},{id:2,title:"Building High-Performance Support Teams in 2025",slug:"building-high-performance-support-teams-2025",excerpt:"Learn the key strategies for scaling customer support teams while maintaining quality and team satisfaction. From hiring practices to performance metrics, discover what works.",content:"",image:"/zendesk-slackbot.png",category:"Leadership",tags:["team-building","support","leadership","scaling"],date:"2025-01-15",readTime:8,author:"David Larsen"},{id:3,title:"The Art of Technical Troubleshooting: A Support Leader's Guide",slug:"art-of-technical-troubleshooting-guide",excerpt:"Debugging complex technical issues requires more than just technical knowledge. Here's how to build systematic approaches that work every time.",content:"",image:"/customer-success.png",category:"Technical",tags:["troubleshooting","technical-support","processes","debugging"],date:"2024-12-20",readTime:12,author:"David Larsen"},{id:4,title:"Customer Success Metrics That Actually Matter",slug:"customer-success-metrics-that-matter",excerpt:"Move beyond vanity metrics to track what really drives customer satisfaction and business growth. A deep dive into meaningful KPIs.",content:"",image:"/markdowner.png",category:"Strategy",tags:["metrics","customer-success","kpis","analytics"],date:"2024-12-10",readTime:6,author:"David Larsen"},{id:5,title:"Automation vs. Human Touch: Finding the Right Balance",slug:"automation-vs-human-touch-balance",excerpt:"When should you automate customer support processes, and when is the human touch irreplaceable? Learn to make these critical decisions.",content:"",image:"/pro.png",category:"Technology",tags:["automation","ai","customer-experience","process-improvement"],date:"2024-11-25",readTime:10,author:"David Larsen"},{id:6,title:"Remote Team Leadership: Lessons from Baltimore",slug:"remote-team-leadership-lessons",excerpt:"Managing distributed support teams requires different skills. Here are the strategies that work for building culture and maintaining performance remotely.",content:"",image:"/threeo.jpg",category:"Leadership",tags:["remote-work","team-culture","management","distributed-teams"],date:"2024-11-10",readTime:7,author:"David Larsen"},{id:7,title:"API Documentation: A Support Team's Secret Weapon",slug:"api-documentation-support-secret-weapon",excerpt:"Great API docs don't just help developers—they empower support teams to solve complex technical issues faster. Here's how to leverage them.",content:"",image:"/threeo.jpg",category:"Technical",tags:["api","documentation","technical-support","developer-tools"],date:"2024-10-28",readTime:9,author:"David Larsen"}],Y={class:"max-w-6xl mx-auto"},J={key:0,class:"mb-16"},tt={class:"bg-white rounded-lg shadow-xl overflow-hidden"},et={class:"md:flex"},ot={class:"md:w-1/2"},st=["src","alt"],at={class:"md:w-1/2 p-8"},rt={class:"flex items-center text-sm text-gray-500 mb-4"},nt={class:"bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium mr-4"},it=["datetime"],lt={class:"text-2xl font-bold text-primary mb-4"},dt={class:"text-gray-600 mb-6"},ct={key:0,class:"flex flex-wrap gap-2 mb-6"},ut={key:2,class:"bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 inline-flex items-center font-medium cursor-pointer"},ht={class:"mb-8"},pt={class:"flex flex-col sm:flex-row gap-4 items-center justify-between"},mt={class:"flex flex-wrap gap-2"},gt=["onClick"],ft={class:"relative"},yt={class:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"},wt={key:1,class:"text-center py-12"},vt={key:2,class:"text-center"},St={__name:"blog",setup(r){R({title:"Blog",meta:[{name:"description",content:"David Larsen's blog on customer support, team leadership, technology, and professional insights from Baltimore."}]});const m=k(X),u=k("All"),l=k(""),g=f(()=>[...m.value].sort((c,e)=>new Date(e.date)-new Date(c.date))),n=f(()=>g.value[0]||null),C=f(()=>["All",...new Set(m.value.map(e=>e.category))]),b=f(()=>{let c=g.value.slice(1);if(u.value!=="All"&&(c=c.filter(e=>e.category===u.value)),l.value){const e=l.value.toLowerCase();c=c.filter(p=>p.title.toLowerCase().includes(e)||p.excerpt.toLowerCase().includes(e)||p.tags.some(x=>x.toLowerCase().includes(e)))}return c}),L=c=>new Date(c).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(c,e)=>{const p=S,x=Z;return s(),a("div",Y,[e[8]||(e[8]=t("div",{class:"text-center mb-12"},[t("h1",{class:"text-4xl font-bold text-primary mb-4"},"Blog"),t("p",{class:"text-xl text-gray-600 max-w-2xl mx-auto"}," Thoughts on customer support, team leadership, technology, and everything in between. ")],-1)),o(n)?(s(),a("div",J,[e[4]||(e[4]=t("h2",{class:"text-2xl font-semibold text-primary mb-6"},"Featured Post",-1)),t("div",tt,[t("div",et,[t("div",ot,[t("img",{src:o(n).image,alt:o(n).title,class:"w-full h-64 md:h-full object-cover"},null,8,st)]),t("div",at,[t("div",rt,[t("span",nt,i(o(n).category),1),t("time",{datetime:o(n).date},i(L(o(n).date)),9,it),e[1]||(e[1]=t("span",{class:"mx-2"},"•",-1)),t("span",null,i(o(n).readTime)+" min read",1)]),t("h3",lt,i(o(n).title),1),t("p",dt,i(o(n).excerpt),1),o(n).tags?(s(),a("div",ct,[(s(!0),a(y,null,w(o(n).tags,d=>(s(),a("span",{key:d,class:"bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"}," #"+i(d),1))),128))])):h("",!0),o(n).content?(s(),_(p,{key:1,to:`/${o(n).slug}`,class:"bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 inline-flex items-center font-medium"},{default:T(()=>e[2]||(e[2]=[v(" Read Full Article ",-1),t("svg",{class:"w-5 h-5 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)])),_:1,__:[2]},8,["to"])):(s(),a("div",ut,e[3]||(e[3]=[v(" Coming Soon ",-1),t("svg",{class:"w-5 h-5 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)])))])])])])):h("",!0),t("div",ht,[t("div",pt,[t("div",mt,[(s(!0),a(y,null,w(o(C),d=>(s(),a("button",{key:d,onClick:bt=>u.value=o(u)===d?"All":d,class:j(["px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",o(u)===d?"bg-secondary text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"])},i(d),11,gt))),128))]),t("div",ft,[I(t("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>P(l)?l.value=d:null),type:"text",placeholder:"Search posts...",class:"pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"},null,512),[[D,o(l)]]),e[5]||(e[5]=t("svg",{class:"absolute left-3 top-2.5 h-5 w-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1))])])]),t("div",yt,[(s(!0),a(y,null,w(o(b),d=>(s(),_(x,{key:d.id,post:d},null,8,["post"]))),128))]),o(b).length===0?(s(),a("div",wt,e[6]||(e[6]=[A('<div class="text-gray-400 mb-4"><svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><h3 class="text-xl font-medium text-gray-600 mb-2">No posts found</h3><p class="text-gray-500">Try adjusting your search or filter criteria.</p>',3)]))):h("",!0),o(b).length>0?(s(),a("div",vt,e[7]||(e[7]=[t("button",{class:"bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"}," Load More Posts ",-1)]))):h("",!0)])}}};export{St as default};
