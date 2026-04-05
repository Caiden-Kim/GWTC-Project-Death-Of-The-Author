<script setup>
defineProps({
  hdr: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <h1 v-html="hdr"></h1>
    <h3 v-html="msg"></h3>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  column-gap: 0px;
  height: fit-content;
  padding: 45px;
  padding-bottom: 35px;
  border-radius: 0.75em;
  width: 75vw;
  min-width: 250px;
  background: #f1ece1;

  user-select: none;

  white-space: pre-wrap;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

h1,
h3 {
  margin: 0;
  padding: 0;
}

.container h1,
.container h3 {
  text-align: center;
}
</style>
