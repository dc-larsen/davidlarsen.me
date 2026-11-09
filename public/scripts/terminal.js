const history = []

function bootTerminal() {
  const output = document.getElementById('terminal-output')
  const input = document.getElementById('terminal-input')
  if (!input || input.dataset.ready === 'true') return
  input.dataset.ready = 'true'

  const about = `A little bit about David Larsen:

    Location   =    Baltimore, MD 🦀

    Role       =    Technical Account Manager
                    Partnering with customers to drive secure adoption and outcomes
                    Enabling engineering teams at high-growth startups to succeed

    Background = {  Secure software supply chain expertise,
                    Customer success & value realization,
                    Technical troubleshooting (APIs, integrations, infrastructure),
                    Driving product adoption & growth,
                    Stakeholder alignment & executive communication  }

    Free Time  = {  Chasing my sheepadoodle Goku 🐶 around Patterson Park,
                    Exploring Baltimore coffee shops,
                    Reading about systems design,
                    Hunting for Baltimore's best breakfast sandwich  }`

  const help = `List of tasks with descriptions
    clear    - clears output window
    history  - list previous commands entered by user
    whoami   - about the user
    skills   - prints resume content of the user`

  const skills = `Experience and Skills:
    Core Expertise = {
        Managing high-ARR enterprise accounts,
        Secure software supply chain enablement,
        Technical troubleshooting & diagnostics,
        Driving adoption & customer outcomes
    }
    Tools & Platforms = {
        Salesforce,
        Gainsight,
        Gong,
        Postman,
        SQL,
        Kubernetes,
        Splunk,
        Jira
    }
    Specializations = {
        Enterprise customer success & retention 💼,
        Security-focused technical success 🔐,
        APIs, integrations & infrastructure debugging 🛠️,
        Executive alignment & stakeholder management 🤝,
        Scalable playbooks & customer workflows 📈
    }
    
    Resume available in navigation menu!`

  function show(text) {
    if (output) output.textContent = text
  }

  show(`${about}\nEnter 'help' for list of commands\n`)
  input.focus()

  input.addEventListener('keydown', event => {
    if (event.key !== 'Enter') return
    const cmd = input.value.trim().toLowerCase()
    if (!/^[a-zA-Z0-9\s\-_]*$/.test(cmd)) {
      show('Invalid command format')
      input.value = ''
      return
    }
    if (cmd === '') return
    history.unshift(cmd)
    if (history.length > 10) history.length = 10
    input.value = ''

    if (cmd === 'help') show(help)
    else if (cmd === 'clear') show('')
    else if (cmd === 'history') show(`Recent commands entered (last 10)${history.map(item => `\n\t${item}`).join('')}`)
    else if (cmd === 'whoami') show(about)
    else if (cmd === 'skills') show(skills)
    else show(`Command: '${cmd}' not found`)
  })
}

document.addEventListener('astro:page-load', bootTerminal)
bootTerminal()
