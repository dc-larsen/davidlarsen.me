<template>
  <div id="app">
    <title>David Larsen</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" referrerpolicy="no-referrer">
    <FloatingActionButton id="fab"/>
    <Greeting id="greeting" :msg= "greetingMsg"/>
    <Window id="window"/>
    <!-- <span>Source: <a href="https://github.com/dc-larsen/davidlarsen-portfolio" class = "fab fa-github"/></span> -->
    <div class = "footer">
      <span class="left-align">Made with <i class="far fa-heart"/> using <a class="link fab fa-vuejs" href="https://vuejs.org" target="_blank" rel="noopener noreferrer" role="button"/></span>
      <span class= "right-align">Updated: {{updatedDate}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FloatingActionButton from './components/FloatingActionButton.vue';
import Window from './components/Window.vue';
import Greeting from './components/Greeting.vue';

@Component({
  components: {
    FloatingActionButton,
    Greeting,
    Window,
  },
})
export default class App extends Vue {
  private greetingMsg: string = "Hey there! I'm David."
  private updatedDate: string = new Date().getFullYear().toString()
}
</script>

<style>
  #app {  
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #171D1C;
  }
  @media only screen and (max-width : 700px) {
    #window{
        display:none !important;
    }
    #greeting{
        padding-top: 15vh;
    }
  }

  .left-align{
    padding-left:  5px;
    float:left;  
  }
  .right-align{
    padding-right:  5px;
    float: right;  
  }

  .footer{
    font-size: 10pt;
    width: 100%;
    position: fixed;
    text-align: left;
    border-top:#cccccc solid 1px;
    background-color: #DBDBDB;
    height:20px;
    left:0;
    bottom:0;
  }
  body, html {
    height: 100%;
    width: 100%;
    background-color: #F7F9F9;
    margin: 0;
    padding:0;
    margin: 0;
  }
  .link{
    color: #171D1C;
    text-decoration: none;
}
</style>
