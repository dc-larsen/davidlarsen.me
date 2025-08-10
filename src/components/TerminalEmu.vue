<template>
<div class ="terminal">
    <div class="termContent">
        <div class ="output" v-if="output">{{ output }}</div>
        <span>{{ inputLabel }}&nbsp;</span>
        <input v-on:keyup.enter="commandEntered" v-model="command" class=commandInput autofocus/>
    </div>
</div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
@Component({
  data () {
    return {
      output: '',
      command: '',
    }
  },
  props: {
    inputLabel: String,
    intro: String
  }
})

export default class TerminalEmu extends Vue {

    history: String[];
    constructor(){
        super();
        this.history = [];
    }

    created(){
        this.$props.intro ? 
                this.$data.output = `${this.$props.intro}\nEnter 'help' for list of commands\n`:
                this.$data.output = `${this.printAbout()}\nEnter 'help' for list of commands\n`;

    }
    
    private commandEntered(){
        // grab reference to command for convenience
        const command = this.$data.command;
        // do not allow empty commands
        if(command==="") return;
        // store in history for "lols"
        this.history.unshift(command);
        this.history.length = this.history.length < 10 ? this.history.length : 10;
        // clear command input
        this.$data.command = "";
        // if a matching command is found, set the output accordingly
        switch (command) {
            case Command.Help:
                this.setOutput(this.printHelp());
                break;
            case Command.Clear:
                this.setOutput("");
                break;
            case Command.History:
                this.setOutput(this.printHistory());
                break;
            case Command.About:
                this.setOutput(this.printAbout());
                break;
            case Command.Resume:
                this.setOutput(this.printSkills());
                break;
            case Command.Projects:
                this.$root.$emit('toggle-finder');
                break;
            default:
                this.setOutput(`Command: '${command}' not found`);
                break;
        }
    }

    /* convenience method to improve readability and set output to string */
    public setOutput(output: String){
        this.$data.output = output;
    }

    /* return help screen output with list of commands */
    private printHelp(): String{
        return `List of tasks with descriptions
    ${Command.Clear}    - clears output window
    ${Command.History}  - list previous commands entered by user
    ${Command.About}   - about the user
    ${Command.Resume}   - prints resume content of the user
    ${Command.Projects} - open personal projects of user`;
    }

    /* return output of past 10 commands entered for gimmicky purposes */
    private printHistory(): String{
        let historyString: String = "Recent commands entered (last 10)";
        this.history.forEach(element => {
            historyString = `${historyString}\n\t${element}`
        });
        return `${historyString}`;
    }

    private printAbout(): String{
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
                    Hunting for Baltimore's best breakfast sandwich  }
`
    }
    private printSkills(): String{
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
    
     Resume available on sidebar!
    `
    }

}
enum Command {
        Help = "help",
        Clear = "clear",
        History = "history",
        About = "whoami",
        Resume = "skills",
        Projects = "projects",
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.output{
    white-space: pre-wrap;
}
.commandInput {
    padding-top:5px;
    width:80%;
    text-overflow:ellipsis;
    font-family: inherit;
    font-size: inherit;
    border: none;
    background: transparent;
    outline: none;
    color: inherit;
}
.terminal{
    color: #87FF65;
    background-color: #28262C;
    overflow:auto;
    height:inherit;
}

.termContent{
    overflow: auto;
    padding-top: 25px;
    padding-left: 10px;
    text-align: left;
    font-family: 'Monaco', 'Courier New';
    font-size: 14px;
}
</style>
