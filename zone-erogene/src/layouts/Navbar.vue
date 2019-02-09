<template>
  <div id="app-nav">
    <nav class="navbar navbar-expand-lg fixed-top">
      <a class="navbar-brand" href="#">La Zone Erogene</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon icon="bars"/>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <font-awesome-icon icon="comments"/>
              <span class="d-md-none nav-item-text">Messages</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <font-awesome-icon icon="search"/>
              <span class="d-md-none nav-item-text">Recherche</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >-- Mon nom --</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Profile</a>
              <a class="dropdown-item" href="#">Mon album</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Deconnexion</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div id="navbar-presence">

    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>


<style>

#navbar-presence{
    height: 100px;
}

nav {
  background-color: #222 !important;
}

nav .navbar-toggler {
  color: violet;
}

nav a {
  color: violet;
}

nav a:hover {
  color: rgb(150, 71, 150);
}

nav .nav-item {
  padding: 0px 15px;
}

nav .nav-item .nav-item-text{
    padding-left: 10px;
}

nav .nav-item.dropdown .dropdown-menu {
  background-color: #222;
  border-radius: 0px;
  border: none;
  padding: 0px;
}

nav .nav-item.dropdown .dropdown-divider {
  border-color: rgb(87, 58, 87);
  width: 80%;
  margin: 10px auto;
}

nav .dropdown-item {
  border-radius: 0px !important;
  color: white;
  margin: 0px;
  padding: 20px;
}

nav .dropdown-item:hover {
  background-color: transparent;
  color: lightgray;
  background-color: rgb(161, 93, 161);
}
</style>

