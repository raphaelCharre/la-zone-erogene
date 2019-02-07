<template>
  <div id="home-offline" class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-md-8" id="home-form">
        <div id="form-container" class="col-10 offset-1">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
          </div>
        </div>
      </div>

      <div class="d-none d-md-block col-md-4" id="home-side"></div>

    </div>
  </div>
</template>

<script>
export default {
    name: 'home-offline',
    data: () => ({
    }),
}
</script>

<style scoped>

  #home-offline {
    height: 100%;
  }

  #home-offline .row{
      height: 100%;
    }

  #home-side{
    background-image: url('~@/assets/images/offline_home_wallpaper.jpg');
    background-color: #000;
    background-size: cover;
    height: 100%;
  }

  #home-form{
    background-color: #000;
    height: 100%;

    display: flex;
    align-items: center;
  }

  #form-container{
    background-color: #111;
    min-height: 300px;
    padding: 0px;
  }

  #form-container ul.nav-tabs{
    width: 100%;
    background-color: #222;
    border: none;
  }

  #form-container li.nav-item{
    width: 50%;
    border: none;
    border-radius: 0px;
  }

  #form-container li.nav-item a{
    border: none;
    color: violet;
    width: 100%;
    padding: 15px;
    transition: ease-in-out .3s;
    border-radius: 0px;
  }

  #form-container li.nav-item a.active, #form-container li.nav-item a:hover, #form-container li.nav-item a.active:hover{
    border-top: solid 1px violet;
    background-color: transparent;
    background-color: #111;
  }

  #form-container li.nav-item a:hover{
    border: none;
  }

  #form-container .tab-content{
    padding: 15px;
    color: white;
  }
</style>
