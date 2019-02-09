<template>

    <home-online v-if="me()"></home-online>
    <home-offline v-else></home-offline>

</template>

<script>
import HomeOffline from '@/layouts/HomeOffline';
import HomeOnline from '@/layouts/HomeOnline';

export default {
  name: 'home',
  components: {
    HomeOffline, HomeOnline
  }
}
</script>

<style scoped>
</style>

