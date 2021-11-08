<template>
  <div>
    <div>HOME!!</div>

    <div id="login" style="padding-top: 10px">
      <input v-model="loginId" placeholder="여기를 수정해보세요"><br/>
      <input v-model="loginPassword" placeholder="여기를 수정해보세요2"><br/>
<!--      <router-link tag="button" to="/user">이동</router-link>-->
      <button @click="clickLogin">로그인</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginId: '',
      loginPassword: ''
    }
  },
  methods: {
    clickLogin() {
      if(this.loginId == '' || this.loginPassword == '') {
        alert('돌아가');
      } else {
        this.$router.push({
          name: "User",
          params: { id: this.loginId, pw: this.loginPassword },
        });
      }
    }
  }
}
</script>

<style>
</style>
