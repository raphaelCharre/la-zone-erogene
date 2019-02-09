<template>
    <div id="site-info">
        <div v-if="me()">
            <h1 class="lead">Bienvenue dans la zone erogene</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla ex, vulputate sit amet eros eget, posuere maximus velit. Integer non mauris non sapien pharetra fermentum eu eget lectus. In hac habitasse platea dictumst. Suspendisse mattis, augue id facilisis fringilla, dolor turpis varius metus, sit amet commodo magna nisl nec ligula. Integer dictum elit id rhoncus tincidunt. Proin nec felis a arcu vestibulum tincidunt. Vestibulum vulputate magna quis mi tristique fringilla. Sed lacinia a ipsum et posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin interdum, libero et lobortis sodales, augue quam faucibus eros, sed consequat enim mi a ligula. Nulla enim neque, varius vitae sem eu, fermentum convallis turpis. Praesent ut tristique lacus. Etiam tempor ipsum nisl. Etiam quis risus viverra, placerat turpis et, mattis magna. Sed sed lobortis enim, vitae accumsan turpis. Nullam placerat justo at sapien mattis sollicitudin.</p>
        </div>
        <div v-else>
            <h1 class="lead">La zone erogene</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla ex, vulputate sit amet eros eget, posuere maximus velit. Integer non mauris non sapien pharetra fermentum eu eget lectus. In hac habitasse platea dictumst. Suspendisse mattis, augue id facilisis fringilla, dolor turpis varius metus, sit amet commodo magna nisl nec ligula. Integer dictum elit id rhoncus tincidunt. Proin nec felis a arcu vestibulum tincidunt. Vestibulum vulputate magna quis mi tristique fringilla. Sed lacinia a ipsum et posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin interdum, libero et lobortis sodales, augue quam faucibus eros, sed consequat enim mi a ligula. Nulla enim neque, varius vitae sem eu, fermentum convallis turpis. Praesent ut tristique lacus. Etiam tempor ipsum nisl. Etiam quis risus viverra, placerat turpis et, mattis magna. Sed sed lobortis enim, vitae accumsan turpis. Nullam placerat justo at sapien mattis sollicitudin.</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "home-description"
};
</script>

<style>
</style>

