<template>
<div id="menu-interaction">
<div class = "menu-button" @click="showMenu = !showMenu">
    <i class="fas fa-bars"></i>
</div>
<div class= "menu-container" v-if="showMenu">
    <div class ="arrow-up"></div>
    <div class="menu" @mouseleave= "showMenu = !showMenu">
            <a class= "menu-item" href = "/David_Larsen_Unified_Resume.pdf">Resume</a>
            <a class= "menu-item" href = "#">Blog (Coming Soon)</a>
            <a class= "menu-item" href = "https://github.com/dc-larsen/support-playbooks">Support Playbooks</a>
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
    right: min(40px, 5vw);
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
    right: min(47px, calc(5vw + 7px));
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
    right: 0;
    height: min(300px, 40vh);
    width: min(180px, 50vw);
    max-width: 200px;
    top:70px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #28262C;
    color:#F7F9F9;
    padding: 10px;
    box-sizing: border-box;
}

/* Mobile responsive adjustments */
@media only screen and (max-width: 480px) {
    .menu-button {
        right: 15px;
        top: 15px;
        height: 30px;
        width: 30px;
    }
    
    .arrow-up {
        right: 22px;
        top: 50px;
    }
    
    .menu {
        right: 0;
        top: 60px;
        width: min(160px, 90vw);
        height: min(250px, 60vh);
        border-radius: 10px 0px 0px 10px;
    }
    
    .menu-item {
        font-size: 14px;
        padding: 5px;
        text-align: center;
    }
}
</style>

