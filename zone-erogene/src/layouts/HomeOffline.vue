<template>
  <div id="home-offline" class="container-fluid">
    <home-bg></home-bg>
    <div class="row">
      <div class="col-xs-12 col-md-6 offset-md-5" id="home-form">
        <home-description class="col-12"></home-description>

        <div id="form-container" class="col-12">
          <ul class="nav nav-tabs" id="offline-home-tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" 
                id="register-tab" 
                data-toggle="tab" 
                href="#register"
                role="tab" 
                aria-controls="home" 
                aria-selected="true">
                Inscription
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" 
                id="conection-tab" 
                data-toggle="tab" 
                href="#conection" 
                role="tab" 
                aria-controls="conection" 
                aria-selected="false">Connexion</a>
            </li>
          </ul>
          <div class="tab-content" id="offline-home-tabs-content">
            <div class="tab-pane fade show active" id="register" role="tabpanel" aria-labelledby="register-tab">

              <form class="col-8 offset-2">
                <div id="carouselExampleIndicators" data-wrap="false" data-interval="false" class="carousel">
                 
                  <div class="carousel-inner">
                    <!-- CAROUSEL ACCOUNT DATA -->
                    <div class="carousel-item active">
                      <div class="form-group">
                        <label for="form-register-email">Adresse email</label>
                        <input required type="email" class="form-control" id="form-register-email" placeholder="Adresse email">
                      </div>

                      <div class="form-group">
                        <label for="input-register-password">Mot de passe</label>
                        <input required type="password" class="form-control" id="input-register-password" placeholder="Mot de passe">
                      </div>

                      <div class="form-group">
                        <label for="input-register-confirmpassword">Confirmation</label>
                        <input required type="password" class="form-control" id="input-register-confirmpassword" placeholder="Confirmation">
                      </div>

                    </div>

                    <!-- CAROUSEL PERSONAL DATA -->
                    <div class="carousel-item">
                      <div class="form-group">
                        <label for="form-register-birth">Date de naissance</label>
                        <input required type="date" class="form-control" id="form-register-birth">
                      </div>

                      <div class="form-group">
                        <label for="form-register-sexe">Sexe</label>
                        <select class="form-control" required name="form-register-sexe" id="form-register-sexe">
                          <option value="female">Femme</option>
                          <option value="male">Homme</option>
                        </select>
                      </div>

                      <hr>

                      <button type="submit" class="btn btn-light">Inscription</button>
                    </div>

                  </div>
                  
                </div>
              </form>

              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>

            </div>

            <div class="tab-pane fade" id="conection" role="tabpanel" aria-labelledby="conection-tab">
              <form class="col-md-8 offset-md-2">
                <div class="form-group">
                  <label for="form-conection-email">Adresse email</label>
                  <input type="email" class="form-control" id="form-conection-email" placeholder="Adresse email">
                </div>
                <div class="form-group">
                  <label for="input-connection-password">Mot de passe</label>
                  <input type="password" class="form-control" id="input-conection-password" placeholder="Mot de passe">
                </div>
                <button type="submit" class="btn btn-light">Se connecter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBg from '@/components/HomeBg.vue'
import HomeDescription from '@/components/HomeDescription.vue'

export default {
    name: 'home-offline',
    data: () => ({
    }),
    components: {
      HomeBg, HomeDescription
    }
}
</script>

<style scoped>

  #home-offline {
    height: 100%;
    background-color: #000;
  }

  #home-offline .row{
    height: 100%;
  }

  #home-side{
    
    height: 100%;
  }

  

  #home-form{
    background-color: transparent;
  }

  #form-container{
    background-color: #111;
    min-height: 300px;
    margin-top : 50px;
    padding: 0px;
    border-radius: 5px;
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
    color: rgb(238, 71, 238);
    width: 100%;
    padding: 15px;
    transition: ease-in-out .3s;
    border-radius: 0px;
  }

  #form-container li.nav-item a:hover{
    background-color: #1a1a1a;
  }

  #form-container li.nav-item a.active, #form-container li.nav-item a.active:hover{
    border-top: solid 1px violet;
    background-color: #111;
  }

  #form-container li.nav-item a:hover{
    border: none;
  }

  #form-container .tab-content{
    padding: 25px;
    color: white;
  }

  #form-container .tab-content hr{
    border: 1px dashed #2a2a2a;
  }
</style>
