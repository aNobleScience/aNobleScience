
<template>
  <header><Homepage></Homepage></header>
  <PaperAbstracts></PaperAbstracts>
  <UserLogin></UserLogin>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script>
import Homepage from './pages/Homepage.vue'
import PaperAbstracts from './pages/PaperAbstracts.vue'
import UserLogin from './pages/UserLogin.vue'

export default {
  name: 'App',
  components: {
    Homepage,
    PaperAbstracts,
    UserLogin,
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>./pages/Homepage.vue./pages/PaperAbstracts.vue./pages/UserLogin.vue
