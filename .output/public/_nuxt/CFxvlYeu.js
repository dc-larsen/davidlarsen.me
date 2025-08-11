import{_ as w}from"./CC2rJlN3.js";import{_ as b,l as y,h as k,c as a,u as o,a as e,b as h,w as p,e as d,t as n,F as v,r as x,o as r,d as c}from"./BRoDzQ9M.js";import{u as _}from"./CNJhcm2q.js";const I={class:"max-w-4xl mx-auto"},S={key:0,class:"text-center py-12"},B={key:1},P={class:"mb-8"},T={class:"mb-4"},W={class:"bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium"},L={class:"text-4xl md:text-5xl font-bold text-primary mb-6"},C={class:"flex flex-wrap items-center text-gray-600 text-sm mb-6"},R={class:"mr-4"},D=["datetime"],N={class:"mr-4"},A={key:0,class:"mr-4"},q={key:1,class:"text-xs text-gray-500"},F={key:0,class:"flex flex-wrap gap-2 mb-8"},M={key:0,class:"mb-8"},U=["src","alt"],j=["innerHTML"],H={class:"border-t border-gray-200 pt-8"},Q={class:"flex flex-col sm:flex-row justify-between items-center"},V={__name:"[slug]",setup(E){const g=[{id:1,title:"Thoughts on leadership",slug:"thoughts-on-leadership",excerpt:"Short version: I try to make good work easier. Set the intent, raise the floor, and get out of the way. A deep dive into leader-leader thinking and practical approaches to engineering leadership.",content:`
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
        <p>This appears to be where your content was cut off. Would you like me to add the rest of the blog post content here?</p>
      </blockquote>
    `,image:"/support-playbooks.png",category:"Leadership",tags:["leadership","management","team-culture","engineering"],date:"2025-08-11",lastUpdated:"2025-08-11",readTime:8,author:"David Larsen"}],f=y().params.slug,t=k(()=>g.find(i=>i.slug===f)||null);_(()=>t.value?{title:t.value.title,meta:[{name:"description",content:t.value.excerpt},{property:"og:title",content:t.value.title},{property:"og:description",content:t.value.excerpt},{property:"og:image",content:t.value.image},{property:"og:type",content:"article"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:t.value.title},{name:"twitter:description",content:t.value.excerpt}]}:{title:"Post Not Found",meta:[{name:"description",content:"Blog post not found."}]});const u=i=>new Date(i).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(i,s)=>{const l=w;return r(),a("article",I,[o(t)?(r(),a("div",B,[e("div",P,[h(l,{to:"/blog",class:"inline-flex items-center text-secondary hover:text-primary font-medium mb-6 transition-colors duration-200"},{default:p(()=>s[2]||(s[2]=[e("svg",{class:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),c(" Back to Blog ",-1)])),_:1,__:[2]}),e("div",T,[e("span",W,n(o(t).category),1)]),e("h1",L,n(o(t).title),1),e("div",C,[e("span",R,"by "+n(o(t).author),1),s[3]||(s[3]=e("span",{class:"mr-4"},"•",-1)),e("time",{datetime:o(t).date,class:"mr-4"},n(u(o(t).date)),9,D),s[4]||(s[4]=e("span",{class:"mr-4"},"•",-1)),e("span",N,n(o(t).readTime)+" min read",1),o(t).lastUpdated?(r(),a("span",A,"•")):d("",!0),o(t).lastUpdated?(r(),a("span",q," Updated "+n(u(o(t).lastUpdated)),1)):d("",!0)]),o(t).tags&&o(t).tags.length?(r(),a("div",F,[(r(!0),a(v,null,x(o(t).tags,m=>(r(),a("span",{key:m,class:"bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"}," #"+n(m),1))),128))])):d("",!0)]),o(t).image?(r(),a("div",M,[e("img",{src:o(t).image,alt:o(t).title,class:"w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"},null,8,U)])):d("",!0),e("div",{class:"prose prose-lg max-w-none mb-12",innerHTML:o(t).content},null,8,j),e("div",H,[e("div",Q,[h(l,{to:"/blog",class:"text-secondary hover:text-primary font-medium mb-4 sm:mb-0 transition-colors duration-200"},{default:p(()=>s[5]||(s[5]=[c(" ← Back to All Posts ",-1)])),_:1,__:[5]}),s[6]||(s[6]=e("div",{class:"text-sm text-gray-500"}," Share this post with your team ",-1))])])])):(r(),a("div",S,[s[1]||(s[1]=e("h1",{class:"text-2xl font-semibold text-gray-600 mb-4"},"Post Not Found",-1)),h(l,{to:"/blog",class:"text-secondary hover:text-primary font-medium"},{default:p(()=>s[0]||(s[0]=[c(" ← Back to Blog ",-1)])),_:1,__:[0]})]))])}}},Y=b(V,[["__scopeId","data-v-7df31d76"]]);export{Y as default};
