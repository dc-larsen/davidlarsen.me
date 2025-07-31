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
            case Command.Lol:
                this.printJoke();
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
    ${Command.Projects} - open personal projects of user
    ${Command.Lol}      - tell me a funny joke`;
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
        return `A little bit about Tyler Howard:

    Education  =    Towson University (2018)
        Major  =    Computer Science, Software Engineering
        Minor  =    Mathematics

    Employment =    Contrast Security
                    Software Engineer
                    Baltimore, MD

    Free Time  = {  messing around with webdev,
                    film photography,
                    video games,
                    backpacking
                    playing guitar,
                    tinkering with old cars  }
`
    }
    private printSkills(): String{
        return `Experience and Skills:
    Primary Languages = {
        Java,
        TypeScript
    }
    Experienced in Front-End Frameworks = {
        Angular,
        Vue,
        React
    }
    Knowledge and Interests = {
        Object Oriented Design,
        Application Security,
        Containerization w/ Docker,
        Serverless w/ AWS,
        Full Stack Web Development,
        Java Instrumentation
    }
    
     Resume available on sidebar!
    `
    }

     private printJoke() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber)
        const requestUrl = "https://www.reddit.com/r/cleanjokes/hot.json?limit=100"
        let that = this;
            axios.get(requestUrl).then(function (response) {   
                console.log(response)
                // Validate response structure to prevent potential XSS
                if (response.data && 
                    response.data.data && 
                    Array.isArray(response.data.data.children) &&
                    response.data.data.children[randomNumber] &&
                    response.data.data.children[randomNumber].data) {
                    
                    const post = response.data.data.children[randomNumber].data
                    // Sanitize content to prevent XSS attacks
                    const frame = post.title ? post.title.replace(/<[^>]*>/g, '').substring(0, 200) : 'No title available'
                    const punchline = post.selftext ? post.selftext.trim().replace(/<[^>]*>/g, '').substring(0, 500) : 'No content available'
                    that.setOutput(`${frame}\n\n${punchline}\n\n\nDownload at https://github.com/tylernhoward/lol-node-cli`);
                } else {
                    that.setOutput("Invalid response format from API :(")
                }
            })
            .catch(function (error) {
                console.log(error)
                that.setOutput("We couldn't find any jokes :(")
            })
     }
}
enum Command {
        Help = "help",
        Clear = "clear",
        History = "history",
        Lol = "lol",
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
