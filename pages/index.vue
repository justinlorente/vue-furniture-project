<template>
  <nuxt-head>
    <title>Home | Furniro</title>
  </nuxt-head>
  <Header />
  <Hero />
</template>

<script>
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';


export default {
  name: 'home',
  components: {
    Header,
    Hero
  },


}

</script>