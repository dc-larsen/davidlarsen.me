<template>
<div id="menu-interaction">
<div class = "menu-button" @click="showMenu = !showMenu">
    <i class="fas fa-bars"></i>
</div>
<div class= "menu-container" v-if="showMenu">
    <div class ="arrow-up"></div>
    <div class="menu" @mouseleave= "showMenu = !showMenu">
            <a class= "menu-item" href = "/Tyler_Howard_Resume.pdf">Resume</a>
            <a class= "menu-item" href = "/ISI_2018_paper_108.pdf">Articles / Publications</a>
            <a class= "menu-item" href = "https://tylernhoward.github.io/old-site">Old Site</a>
            <a class= "menu-item" href = "https://tylernhoward.github.io/markdowner">Markdown Editor</a>
        </div>
    </div>
</div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FloatingActionButton extends Vue {
    private showMenu:boolean = false;
}

</script>
<style>
.menu-button{
    position:fixed;
    right: 40px;
    top:20px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #28262C;
    color:#F7F9F9;
    height:35px;
    width:35px;
    transition: transform 1s;
}
.menu-button:hover {
    transform: rotate(90deg);
    color:#F7F9F9;
    background-color: #138A36;
    text-decoration: none;
    cursor: pointer;
}
.menu-item{
    color:#F7F9F9;
    text-decoration: none;
}
.menu-item:hover {
    color: #87FF65;
    text-decoration: none;
    cursor: pointer;
}
.arrow-up {
    position:fixed;
    right:47px;
    top:60px;
    width: 0; 
    height: 0; 
    opacity: 0.9;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #28262C;
}
.menu{
    z-index: 999 !important;
    position:fixed;
    border-radius: 10px 0px 0px 10px;
    opacity: 0.9;
    right: -5px;
    height: 300px;
    width: 150px;
    top:70px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #28262C;
    color:#F7F9F9;
}
</style>

