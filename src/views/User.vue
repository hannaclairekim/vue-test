<template>
  <div>
    User 페이지~~~
    <p>{{ id }}</p>
    <p>{{ pw }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    id: {
      type: String,
      default: "",
    },
    pw: {
      type: String,
      default: 0,
    },
  },
}
</script>

<style scoped>

</style>
