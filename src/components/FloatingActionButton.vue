<template>
<div id="menu-interaction">
    <div class="menu-button" @click="showMenu = !showMenu">
        <i class="fas fa-bars"></i>
    </div>
    <div class="menu-dropdown" v-if="showMenu" @mouseleave="showMenu = false">
        <a class="menu-item" href="/David_Larsen_Unified_Resume.pdf">Resume</a>
        <a class="menu-item" href="#">Blog (Coming Soon)</a>
        <a class="menu-item" href="https://github.com/dc-larsen/support-playbooks">Support Playbooks</a>
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
#menu-interaction {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.menu-button{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #28262C;
    color: #F7F9F9;
    height: 35px;
    width: 35px;
    transition: transform 1s;
    cursor: pointer;
}
.menu-button:hover {
    transform: rotate(90deg);
    color:#F7F9F9;
    background-color: #138A36;
    text-decoration: none;
    cursor: pointer;
}
.menu-item {
    color: #F7F9F9;
    text-decoration: none;
    padding: 12px 16px;
    display: block;
    transition: background-color 0.2s ease;
    border-radius: 4px;
    margin: 2px 8px;
}

.menu-item:hover {
    color: #87FF65;
    background-color: rgba(135, 255, 101, 0.1);
    text-decoration: none;
    cursor: pointer;
}
.menu-dropdown {
    position: absolute;
    top: 45px;
    right: 0;
    background-color: #28262C;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    padding: 8px 0;
    min-width: 180px;
    z-index: 1001;
    opacity: 0.95;
    display: flex;
    flex-direction: column;
    transform-origin: top right;
    animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px) scale(0.95);
    }
    to {
        opacity: 0.95;
        transform: translateY(0) scale(1);
    }
}

/* Mobile responsive adjustments */
@media only screen and (max-width: 480px) {
    #menu-interaction {
        right: 15px;
        top: 15px;
    }
    
    .menu-button {
        height: 32px;
        width: 32px;
        font-size: 14px;
    }
    
    .menu-dropdown {
        min-width: 160px;
        right: -5px;
    }
    
    .menu-item {
        font-size: 14px;
        padding: 10px 14px;
    }
}
</style>

