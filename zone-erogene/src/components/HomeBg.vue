<template>
    <div class="d-none d-md-block" id="home-bg"></div>
</template>

<script>
export default {
    name: 'home-bg'
}
</script>


<style>
    #home-bg{
    position: fixed;
    background-image: url('~@/assets/images/offline_home_wallpaper.jpg');
    background-size: auto 100%;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
