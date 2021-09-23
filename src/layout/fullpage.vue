<template>
  <div>
    <h1>Layout full page</h1>
    <ul>
      <li>
        <router-link to="/" v-todef="'/'">home</router-link>
      </li>
      <li>
        <router-link to="/about" v-todef="'/about'">About</router-link>
      </li>
      <li>
        <router-link to="/me">Me</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <h4>This is footer</h4>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>