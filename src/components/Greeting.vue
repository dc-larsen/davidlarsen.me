<template>
<div id = "greeting">
    <img class="pro-pic" alt="Profile Pic" src="../assets/pro.png">
    <h2>{{msg}}</h2>
     <div>
        <a href="https://www.linkedin.com/in/david-larsen-404622143/" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-linkedin fa-2x"></a>
        <a href="https://github.com/dc-larsen" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-github fa-2x"></a>
        <a href="https://www.flickr.com/photos/203372618@N08/" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-flickr fa-2x"></a>
        <a href="https://open.spotify.com/user/dc2larsen" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-spotify fa-2x"></a>
        <a href="https://worldofwarcraft.blizzard.com/en-us/character/us/proudmoore/fizzl%C3%AA/" target="_blank" rel="noopener noreferrer" role="button" class="btn-link"><img src="wow-logo.png" alt="WoW Character" class="wow-logo-img"></a>
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

.wow-logo-img {
    width: 32px;
    height: 32px;
    margin-left: 10px;
    margin-right: 10px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    vertical-align: middle;
}

.wow-logo-img:hover {
    transform: scale(1.1);
    opacity: 0.8;
}

</style>

