<template>
  <aside :class="{ 'is-expanded': is_expanded }">
    <div class="logo">
      <img
        src="https://media.istockphoto.com/id/1305325287/id/vektor/logo-huruf-k-logo-huruf-k-kreatif.jpg?s=612x612&w=0&k=20&c=g7Gxjwjk91Urx3ohZUU0Fu2BP5EAaLOKFBXQdLkobF8="
        alt="vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-symbols-outlined">double_arrow</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-symbols-outlined"> home </span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/collection">
        <span class="material-symbols-outlined">
          man
        </span>
        <span class="text">Collection Section</span>
      </router-link>
    </div>

    <div class="flexi"></div>
      <div class="menu">
        <router-link class="button" to="/set">
        <span class="material-symbols-outlined">
          settings
        </span>
        <span class="text">Setting</span>
      </router-link>
      </div>
    
  </aside>
</template>
  
<script setup>
import { ref } from "vue";

const is_expanded = ref(false);

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>
  
<style lang="scss" scoped>
@import "../assets/style/sidebar.scss"
</style>
  