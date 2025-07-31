<template>
    <a class = "item" @click="$root.$emit('toggle-modal',name)">
        <div class ="folder"/>
        <div class = "label">{{ name }}</div>
    </a>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    name: String,
  }
})
export default class FinderItem extends Vue {

}
</script>
<style scoped>
    .item{
        margin:30px;
        text-decoration:none;
        padding:30px 20px 10px;
    }
    .item:hover{
        background-color: whitesmoke;
        border-radius: 10px 10px 10px 10px;
    }
    .folder {
        width: 100px;
        height: 65px;
        position: relative;
        background-color: skyblue;
        border-radius: 0 6px 6px 6px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }
    .folder::before {
        color: lightblue;
        content: '';
        width: 50%;
        height: 10px;
        border-radius: 6px 10px 0 0;
        background-color: lightblue;
        position: absolute;
        top: -10px;
        left: 0px;
    }
    .label{
        width: 100px;
        color: black;
        padding-top: 20px;
    }
</style>