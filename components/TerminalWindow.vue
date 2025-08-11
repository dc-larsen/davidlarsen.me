<template>
  <div class="mac-window w-full h-[32rem] overflow-hidden">
    <!-- Mac window title bar -->
    <div class="mac-window-bar">
      <div class="mac-circles">
        <div class="mac-circle"></div>
      </div>
      <div class="mac-title-bar">
        <span class="text-xs font-medium text-gray-600">[david~]$</span>
      </div>
    </div>
    
    <!-- Terminal content -->
    <div class="terminal h-full">
      <div class="terminal-content">
        <div v-if="output" class="output whitespace-pre-wrap mb-2">{{ output }}</div>
        <div class="flex items-center">
          <span class="text-muted">{{ inputLabel }}&nbsp;</span>
          <input 
            v-model="command"
            class="command-input flex-1"
            @keyup.enter="handleCommand"
            ref="terminalInput"
            autocomplete="off"
            spellcheck="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const output = ref('')
const command = ref('')
const history = ref([])
const inputLabel = ref('[david~]$')
const terminalInput = ref(null)

// Commands enum
const Command = {
  Help: 'help',
  Clear: 'clear',
  History: 'history',
  About: 'whoami',
  Resume: 'skills',
  Projects: 'projects'
}

onMounted(() => {
  output.value = `${printAbout()}\nEnter 'help' for list of commands\n`
  // Focus the terminal input
  if (terminalInput.value) {
    terminalInput.value.focus()
  }
})

async function handleCommand() {
  const cmd = command.value.trim().toLowerCase()
  
  // Sanitize input - only allow alphanumeric and basic characters
  if (!/^[a-zA-Z0-9\s\-_]*$/.test(cmd)) {
    output.value = 'Invalid command format'
    command.value = ''
    return
  }
  
  if (cmd === '') return
  
  // Add to history
  history.value.unshift(cmd)
  if (history.value.length > 10) {
    history.value = history.value.slice(0, 10)
  }
  
  // Clear input
  command.value = ''
  
  // Process command
  switch (cmd) {
    case Command.Help:
      output.value = printHelp()
      break
    case Command.Clear:
      output.value = ''
      break
    case Command.History:
      output.value = printHistory()
      break
    case Command.About:
      output.value = printAbout()
      break
    case Command.Resume:
      output.value = printSkills()
      break
    case Command.Projects:
      await navigateTo('/projects')
      break
    default:
      output.value = `Command: '${cmd}' not found`
      break
  }
}

function printHelp() {
  return `List of tasks with descriptions
    ${Command.Clear}    - clears output window
    ${Command.History}  - list previous commands entered by user
    ${Command.About}   - about the user
    ${Command.Resume}   - prints resume content of the user
    ${Command.Projects} - navigate to personal projects`
}

function printHistory() {
  let historyString = 'Recent commands entered (last 10)'
  history.value.forEach(element => {
    historyString += `\n\t${element}`
  })
  return historyString
}

function printAbout() {
  return `A little bit about David Larsen:

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
                    Hunting for Baltimore's best breakfast sandwich  }`
}

function printSkills() {
  return `Experience and Skills:
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
    
     Resume available in navigation menu!`
}
</script>