<template>
    <div id="home-online">
        <home-bg></home-bg>
        <navbar></navbar>
        <div class="container-fluid">
            <div class="row">
                <home-description class="col-md-6 offset-md-5"></home-description>
            </div>
        </div>

    </div>
</template>

<script>
import Navbar from '@/layouts/Navbar.vue';
import HomeBg from '@/components/HomeBg.vue';
import HomeDescription from '@/components/HomeDescription.vue';

export default {
    name: 'home-online',
    components: {
        Navbar, HomeBg, HomeDescription
    }
}
</script>

<style scoped>
</style>