
<template>
  <div class="app">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>


<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>

<style lang="scss">
:root {
  --blue: #002772;
  --pinksoft: #fde2ff;
  --blackone: #1e1e1e;
  --purple: #720060;
  --bluesoft: #d6e6ff;
  --blacktwo: #3f3f3f;
  --grey: #dcdcdc;
  --whitetulang: #FFFFFF;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--grey);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px){
      padding-left: 6rem;
    }
  }
}
</style>
