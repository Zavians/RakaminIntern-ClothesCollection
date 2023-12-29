<template>
  <aside :class="{ 'is-expanded': is_expanded }">
    <div class="logo">
      <img src="../assets/vue.svg" alt="vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-symbols-outlined"> double_arrow </span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-symbols-outlined"> home </span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/about">
        <span class="material-symbols-outlined">
            info
            </span>
        <span class="text">About</span>
      </router-link>

      <router-link class="button" to="/collection">
        <span class="material-symbols-outlined">
            man
            </span>
        <span class="text">Collection Section</span>
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
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 15px rgba(0, 0, 0, 0.2);
  background-color: white;
  color: var(--blue);
  border-right: 2px solid white; 
  transition: box-shadow 0.2s ease-out; 

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--blackone);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--blue);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3

  .menu {
    margin:0 -1rem;
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
  