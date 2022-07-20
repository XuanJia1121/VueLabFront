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
          <el-button @click="toLogin()" type="info" icon="el-icon-s-custom" circle></el-button>
        </div>
      </div>
    </div>
  </div>
  
  <el-container>
    <el-aside>
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">XX管理</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">XX管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
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
  
</div>
</template>

<script>
/* eslint-disable */

// import {ApiServer} from '../api/http.js'

export default {
  data() {
    return {
      
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toLogin(){
        this.$router.push('/login');
      }
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
</style>