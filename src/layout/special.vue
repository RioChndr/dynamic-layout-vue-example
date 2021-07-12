<template>
  <div class="special">
    <ul>
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/me">Me</router-link>
      </li>
    </ul>
    <h1>Special layout</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.special {
  background: yellow;
  width: 100vw;
  height: 100vh;
}
</style>