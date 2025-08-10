<template>
<div id = "greeting">
    <img class="pro-pic" alt="Profile Pic" src="../assets/pro.png">
    <h2>{{msg}}</h2>
     <div>
        <a href="https://www.linkedin.com/in/david-larsen-404622143/" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-linkedin fa-2x"></a>
        <a href="https://github.com/dc-larsen" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-github fa-2x"></a>
        <a href="https://www.flickr.com/photos/203372618@N08/" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-flickr fa-2x"></a>
        <a href="https://open.spotify.com/user/dc2larsen" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-spotify fa-2x"></a>
        <a href="https://worldofwarcraft.blizzard.com/en-us/character/us/proudmoore/fizzl%C3%AA/" target="_blank" rel="noopener noreferrer" role="button" class="btn-link wow-logo-container fa-2x"><img src="wow-logo-new.png" alt="WoW Character" class="wow-logo-img"></a>
      </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Greeting extends Vue {
    @Prop() private msg!:string;
}

</script>
<style>
.pro-pic{
    border-radius: 50%;
    border: #315C2B solid 3px;
    max-width: 175px;
}
#greeting{
    padding:20px
}
.btn-link{
    color:#171D1C;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
}
.btn-link:hover {
    color:#138A36;
    text-decoration: none;
    cursor: pointer;
}

.wow-logo-container {
    display: inline-block;
    position: relative;
    transition: all 0.3s ease;
}

.wow-logo-img {
    width: 1.6em;
    height: 1.6em;
    vertical-align: baseline;
    display: block;
    transition: filter 0.3s ease;
}

.wow-logo-container:hover .wow-logo-img {
    filter: brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%);
}

</style>

