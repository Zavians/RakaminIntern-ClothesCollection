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
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--whitetulang);
  color: var(--blackone);

  transition: 0.2s ease-out;

  .flexi {
    flex: 1 1 0;
  }

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
    transition: 0.2 ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--blackone);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-symbols-outlined {
          color: var(--blacktwo);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    color: var(--blacktwo);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--blackone);
        margin-bottom: 0.5rem;
        transition: 0.2rem ease-out;
      }

      .text {
        color: var(--blackone);
        transition: 0.2rem ease-out;
      }

      &:hover, &.router-link-exact-active {
        background-color: var(--bluesoft);

        .material-symbols-outlined, .text{
          color: var(--blue);
        }
      }

      .router-link-exact-active {
        border-right: 5px solid var(--bluesoft);
      }

    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
      
    }
    .button {
      .material-symbols-outlined {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
  