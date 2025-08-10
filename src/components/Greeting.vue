<template>
<div id = "greeting">
    <img class="pro-pic" alt="Profile Pic" src="../assets/pro.png">
    <h2>{{msg}}</h2>
     <div>
        <a href="https://www.linkedin.com/in/david-larsen-404622143/" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-linkedin fa-2x"></a>
        <a href="https://github.com/dc-larsen" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-github fa-2x"></a>
        <a href="https://www.flickr.com/photos/203372618@N08/" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-flickr fa-2x"></a>
        <a href="https://open.spotify.com/user/dc2larsen" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-spotify fa-2x"></a>
        <a href="https://worldofwarcraft.blizzard.com/en-us/character/us/proudmoore/fizzl%C3%AA/" target="_blank" rel="noopener noreferrer" role="button" class="btn-link wow-icon fa-2x"></a>
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

.wow-icon {
    background-image: url('/wow-logo-new.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
}

.wow-icon:hover {
    filter: invert(30%) sepia(100%) saturate(2000%) hue-rotate(90deg) brightness(100%) contrast(120%);
}

</style>

