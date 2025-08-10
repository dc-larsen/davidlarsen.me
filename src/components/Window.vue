<template>
<div class="container">
        <div class="window">
          <div class="bar">
            <div class = "circle-bar">
              <div class="circle" style="background-color:tomato;" @click="finder=false;windowTitle='Terminal'"></div>
              <div class="circle" style="background-color:gold;" @click="$root.$emit('toggle-finder')"></div>
              <div class="circle" style="background-color:limegreen;"></div>
            </div>
            <div class="title-bar">
              <span class="title">{{ windowTitle }}</span>
            </div>
          </div>
          <TerminalEmu v-if= "!finder" :inputLabel= "label"/>
          <FinderEmu v-if= "finder"/>
        </div>
      </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import TerminalEmu from './TerminalEmu.vue';
import FinderEmu from './FinderEmu.vue';
@Component({
  components: {
    TerminalEmu,
    FinderEmu
  },
  data () {
    return {    
      finder: false,
      windowTitle: "Terminal",
      label: "[david~]$"
   }
  }
})
export default class Terminal extends Vue {
  created(){
    this.$root.$on('toggle-finder', () =>{
      this.$data.finder = !this.$data.finder;
      this.$data.finder ? this.$data.windowTitle = "Projects" : this.$data.windowTitle = "Terminal"
    });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    display: flex;
    justify-content: center;
}

.window {
    height: 50vh;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    width: 70%;
    overflow: auto;
}

.bar{
    position:absolute;
    width:inherit;
    height: 20px;
    background-color: #DBDBDB;
    z-index: 99 !important;
}

.circle-bar{
    display: flex;
    justify-content: left;
}

.circle {
    z-index:2;
    margin: 3px;
    background-color: #fd9494;
    border-radius: 50%;
    border:#cccccc solid 1px;
    width: 12px;
    height: 12px;
}

.title-bar{
    z-index: 1;
    top: -20px;
    position: relative;
    display: flex;
    align-items:center;
    justify-content:center;
}
</style>
