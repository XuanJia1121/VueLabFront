<template>
<div>

  <!-- top -->
  <div id="jumbotron" class="jumbotron jumbotron-fluid">
    <div class="container">
      <div id="titleRow" class="row align-items-center">
        <div class="col-4">
          <font id="title">MMLab</font>
        </div>
        <div class="col-8 d-flex justify-content-end">
          <el-button v-if="!GET_USERINFO.token" @click="toLogin()" type="info" icon="el-icon-s-custom" round>登入</el-button>
          <el-button v-else type="warning" icon="el-icon-s-custom" @click="logoutBtn()" round>登出</el-button>
          <el-button type="primary" icon="el-icon-shopping-cart-1" circle></el-button>
          <el-button type="primary" icon="el-icon-s-tools" circle></el-button>
        </div>
      </div>
    </div>
  </div>
  
  <el-container>
    <el-main>
       <div class="container">
        <div class="row mt-3">
          <div class="col-4 mt-5">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-4 mt-5">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-4 mt-5">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>

  <!-- modal -->
    <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

</div>
</template>

<script>
/* eslint-disable */

import {mapGetters,mapActions} from 'vuex'

export default {
  data() {
    return {

    }
  },
  methods: {
      ...mapActions(['Logout']),
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toLogin(){
        this.$router.push('/login');
      },
      logoutBtn(){
        this.Logout();
        this.$router.push('/');
      },
  },
  computed: {
    ...mapGetters(['GET_USERINFO'])
  },
}
</script>

<style scoped>
  #jumbotron {
    background-color: rgb(87, 92, 160);
  }
  #title {
    color:aliceblue;
    font-size: 30px;
  }
  #titleRow {
    height: 70px;
  }
 .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>