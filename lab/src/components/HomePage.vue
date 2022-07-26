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
          <el-button @click="visible = !visible" id="showModal" type="primary" icon="el-icon-s-tools" circle></el-button>
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
        <div class="row align-items-center">
          <div class="col-6 d-flex justify-content-center">
             <el-popover
              placement="bottom"
              width="600"
              v-model="visible">
              <p>編輯資料</p>
              <div style="text-align: right; margin: 0">
                <form>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                    </div>
                  </div>
                </form>
              </div>
            </el-popover>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>

</div>
</template>

<script>
/* eslint-disable */

import {mapGetters,mapActions} from 'vuex'

export default {
  data() {
    return {
      visible: false,
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