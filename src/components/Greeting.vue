<template>
<div id = "greeting">
    <img class="pro-pic" alt="Profile Pic" src="../assets/pro.png">
    <h2>{{msg}}</h2>
     <div>
        <a href="https://www.linkedin.com/in/tyler-howard-b874b8118/" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-linkedin fa-2x"></a>
        <a href="https://github.com/tylernhoward" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-github fa-2x"></a>
        <a href="https://flickr.com/photos/faintcolors" target="_blank" rel="noopener noreferrer" role="button" class="btn-link fab fa-flickr fa-2x"></a>
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

</style>

