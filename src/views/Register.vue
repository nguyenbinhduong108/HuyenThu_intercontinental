<template>
  <div class="close" @click="Close">
    <i class="fa-solid fa-xmark"></i>
  </div>
  <div class="signup-box" v-if="status=='Login'">
      <h1>Đăng ký</h1>
      <!-- <h4>It's free and only takes a minute</h4> -->
      <form>
        <label>First Name</label>
        <input v-model="signupUser.firstName" @focusout="focusoutFirstName" type="text" placeholder="" />
        <div class="error-text" v-if="error.firstName">Nhập họ.</div>


        <label>Last Name</label>
        <input v-model="signupUser.lastName" @focusout="focusoutLastName" type="text" placeholder="" />
        <div class="error-text" v-if="error.lastName">Nhập tên.</div>

        <label>Phone</label>
        <input v-model="signupUser.phone"  @focusout="focusoutPhone" type="text" placeholder="" />
        <div class="error-text" v-if="error.phone">Nhập số điện thoại.</div>

        <label>Email</label>
        <input v-model="signupUser.email" @focusout="focusoutEmail" type="email" placeholder="" />
        <div class="error-text" v-if="error.email">Nhập email.</div>

        <label>User Name</label>
        <input v-model="signupUser.username" @focusout="focusoutUserName" type="text" placeholder="" />
        <div class="error-text" v-if="error.username">Nhập tên đăng nhập.</div>
        
        <label>Password</label>
        <input v-model="signupUser.password" @focusout="focusoutPassword" type="password" placeholder="" />
        <div class="error-text" v-if="error.email">Nhập mật khẩu.</div>

        <label>Confirm Password</label>
        <input v-model="signupUser.confirmPassword" @focusout="focusoutConfirmPassword" type="password" placeholder="" />
        <div class="error-text" v-if="error.confirmPassword">Nhập xác nhận mật khẩu.</div>
        <div class="error-text" v-if="error.wrongConfirmPassword">Xác nhận mật khẩu không chính xác.</div>

        <button class="login-btn" @click="handleSignUp">Sign up</button>
        <p class="para-2" v-if="status=='Login'">
          <span style="color: black;">Have an account?</span> 
          <a @click="Login"style="color: blue;">Login here</a>
        </p>
      </form>
  </div>
  

    <div class="login-box" v-if="status=='SignUp'">
      <h1>Đăng nhập</h1>
      <form @submit.prevent="handleLogin">
        <label>User name</label>
        <input v-model="userData.userName" type="text" placeholder="" />
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

<div class="wrapper open" v-if="isShowDialog">
  <div class="overlay"></div>
    <div class="dialog" role="dialog" aria-labelledby="title" aria-describedby="content">
      <button class="close" @click="closeDialog">✖️</button>
      <h1 id="title">Thông báo</h1>
      <div id="content" class="content">
        <p>Tài khoản này đã tồn tại</p>
      </div>
    </div>
  </div>
   
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from "@/router";
import axios from 'axios';
import { useUserStore } from "@/stores/user"

const useUser = useUserStore();

const isShowDialog = ref<boolean>(false)


const userData = ref<any>({
  userName: '',
  password: '',
})

const signupUser = ref<any>({
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  password:'',
  confirmPassword: '',
  username:'' 
})

const error = ref<any>({
  firstName:false,
  lastName:false,
  email:false,
  phone:false,
  password:false,
  confirmPassword: false,
  wrongConfirmPassword: false,
  username:false 
})

const status = ref<string>("SignUp")

// const loading = ref<boolean>(false);


const handleLogin = async () => {
  // console.log(userData.value.username, userData.value.password) 
  const result = await axios.post(`http://localhost:8081/hotelmaster/auth/login`, 
    {
      "userName": userData.value.userName,
      "password": userData.value.password,
    }
  )
  // console.log(result.data);
  useUser.setUser(result.data);
  // console.log(123123123123,useUser.user)
  userouter.go(-1);
}

const handleSignUp = async () => {
  if(signupUser.value?.password != signupUser.value?.confirmPassword){
    error.value.wrongConfirmPassword = true;
    return;
  } else {
    error.value.wrongConfirmPassword = false;
  }

  if(validateForm() == false){
    return;
  }
  else{
    const result: any = await axios.post('http://localhost:8081/hotelmaster/auth/create', {
      firstName: signupUser.value?.firstName,
      lastName: signupUser.value?.lastName,
      email: signupUser.value?.email,
      phone: signupUser.value?.phone,
      password: signupUser.value?.password,
      username: signupUser.value?.username
    }).then(respone => {
      if(result.response.status   <= 400){
        useUser.setUser(result.data);
        router.push({name: 'home'})
      }
    }).catch(error => {
      console.log("ahsdkjahsdkhaksdh")
      isShowDialog.value = true;
    })
    
    
     


  }
}

const closeDialog = () =>{
  isShowDialog.value = false;
}

const validateForm = (): boolean => {
  let index = 0;
  if (signupUser.value?.firstName == "") {
    error.value.firstName = true;
    index++;
  } 
  if (signupUser.value?.lastName == "") {
    error.value.lastName = true;
    index++;
  }
  if (signupUser.value?.phone == "") {
    error.value.phone = true;
    index++;
  }
  if (signupUser.value?.email == "") {
    error.value.email = true;
    index++;
  }
  if (signupUser.value?.password == "") {
    error.value.password = true;
    index++;
  }
  if (signupUser.value?.confirmPassword == "") {
    error.value.confirmPassword = true;
    index++;
  }
  if(signupUser.value?.password != signupUser.value?.confirmPassword){
    error.value.wrongConfirmPassword = true;
    index++;
  }
  if (signupUser.value?.username == "") {
    error.value.username = true;
    index++;
  }

  if(index !==0) {
    return false;
  }
  return true;
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

const focusoutFirstName = () => {
  if (signupUser.value?.firstName == "") {
    error.value.firstName = true;
  } else {
    error.value.firstName = false;
  }
}

const focusoutLastName = () => {
  if (signupUser.value?.lastName == "") {
    error.value.lastName = true;
  } else {
    error.value.lastName = false;
  }
}

const focusoutPhone = () => {
  if (signupUser.value?.phone == "") {
    error.value.phone = true;
  } else {
    error.value.phone = false;
  }
}

const focusoutEmail = () => {
  if (signupUser.value?.email == "") {
    error.value.email = true;
  } else {
    error.value.email = false;
  }
}

const focusoutPassword = () => {
  if (signupUser.value?.password == "") {
    error.value.password = true;
  } else {
    error.value.password = false;
  }
}

const focusoutConfirmPassword = () => {
  if (signupUser.value?.confirmPassword == "") {
    error.value.confirmPassword = true;
  } else {
    error.value.confirmPassword = false;
  }
}

const focusoutUserName = () => {
  if (signupUser.value?.username == "") {
    error.value.username = true;
  } else {
    error.value.username = false;
  }
}

const wrongConfirmPassword = () => {
  if(signupUser.value?.password != signupUser.value?.confirmPassword){
    error.value.wrongConfirmPassword = true;
  } else {
    error.value.wrongConfirmPassword = false;
  }
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

.error-text {
          margin-top: 10px;
          margin-bottom: 0;
          font-size: 14px;
          line-height: 150%;
          font-family: Graphik-Medium, sans-serif;
          color: #bc261a;
        }

.dialog {
    background: #ffffff;
    max-width: 600px;
    padding: 1rem;
    position: fixed;
    max-height: 200px;
    overflow: hidden;
}

.wrapper.open {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    visibility: visible;
}
.wrapper {
    opacity: 0;
    transition: visibility 0s, opacity 0.25s ease-in;
}

.overlay {
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>
