<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  background-color: black;
  z-index: 0;
}

p {
  color: white;
  text-align: justify;
  font-size: .9em;
}

h1.lead {
  color: violet;
  border-bottom: 1px solid violet;
  font-size: 1.5em;
  padding: 5px 0px;
}

h1.lead:nth-of-type(2n) {
  text-align: right
}

p a {
  color: violet;
  text-decoration: none;
  font-weight: bold;
}

p a:hover {
  color: violet;
  text-decoration: underline;
}

</style>
