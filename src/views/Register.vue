/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
<template>
  <div class="close" @click="Close">
    <i class="fa-solid fa-xmark"></i>
  </div>
  <div class="signup-box" v-if="status=='Login'">
      <h1>Đăng ký</h1>
      <!-- <h4>It's free and only takes a minute</h4> -->
      <form>
        <label>First Name</label>
        <input type="text" placeholder="" />
        <label>Last Name</label>
        <input type="text" placeholder="" />
        <label> Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <label>Confirm Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" />
      </form>
      <p>
        By clicking the Sign Up button,you agree to our <br />
        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
      </p>
  </div>
  <p class="para-2" v-if="status=='Login'">
    <span style="color: black;">Have an account?</span> 
    <a @click="Login"style="color: blue;">Login here</a>
  </p>

    <div class="login-box" v-if="status=='SignUp'">
      <h1>Đăng nhập</h1>
      <form @submit.prevent="handleLogin">
        <label>User name</label>
        <input v-model="userData.username" type="text" placeholder="" />
        <label>Password</label>
        <input v-model="userData.password" type="password" placeholder="" />
        <!-- <input type="button" value="Submit" /> -->

        <button class="login-btn" @click="handleLogin">Login</button>
      </form>
    </div>
    <p class="para-2" v-if="status=='SignUp'">
      <!-- <span style="color: black;">Not have an account?</span> <a @click="SignUp">Sign Up Here</a> -->
      <span style="color: black;">Not have an account?</span> 
      <span @click="SignUp" style="color: blue;">Sign Up Here</span>
    </p>
   
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from "@/router";
import axios from 'axios';
import { useUserStore } from "@/stores/user"

const useUser = useUserStore();


const userData = ref<any>({
  username: '',
  password: '',
})

const status = ref<string>("SignUp")

// const loading = ref<boolean>(false);


const handleLogin = async () => {
  // console.log(userData.value.username, userData.value.password) 
  const result = await axios.post(`http://localhost:8081/hotelmaster/auth/login`, 
    {
      "username": userData.value.username,
      "password": userData.value.password,
    }
  )

  // console.log(result.data);

  useUser.setUser(result.data);

  // console.log(123123123123,useUser.user)



  userouter.go(-1);
}

import { useRouter } from 'vue-router';

const userouter = useRouter();

const Login = () => {
  status.value = 'SignUp'
}

const SignUp = () => {
  status.value = 'Login'
}

const Close = () => {
  router.push({name: 'home'})
}



</script>
<style lang="scss" scoped>

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css");

.signup-box {
  width: 360px;
  height: 620px;
  margin: auto;
  background-color: white;
  border-radius: 3px;
}
.login-box {
  width: 360px;
  height: 280px;
  margin: auto;
  border-radius: 3px;
  background-color: white;
}
h1 {
  text-align: center;
  padding-top: 15px;
}
h4 {
  text-align: center;
}
form {
  width: 300px;
  margin-left: 20px;
}
form label {
  display: flex;
  margin-top: 20px;
  font-size: 18px;
}
form input {
  width: 100%;
  padding: 7px;
  border: none;
  border: 1px solid gray;
  border-radius: 6px;
  outline: none;
}
.login-btn {
  width: 320px;
  height: 35px;
  margin-top: 20px;
  border: none;
  background-color: #49c1a2;
  color: white;
  font-size: 18px;
}
p {
  text-align: center;
  padding-top: 20px;
  font-size: 15px;
}
.para-2 {
  text-align: center;
  color: white;
  font-size: 15px;
  margin-top: -10px;
}
.para-2 a {
  color: #49c1a2;
}

.close{
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.close i {
  font-size: 20px;
}

.close:hover{
  background-color: gainsboro;
}
</style>
