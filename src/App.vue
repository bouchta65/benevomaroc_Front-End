<script setup>
import Navbar from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import Unauthorized from './components/layout/unauthorized.vue'; 
import { useRoute } from 'vue-router';

const route = useRoute(); 
</script>

<template>
  <Navbar />
  <div>
    <Unauthorized v-if="route.meta.unauthorized" />
    <router-view v-else />
  </div>
  <Footer />
</template>