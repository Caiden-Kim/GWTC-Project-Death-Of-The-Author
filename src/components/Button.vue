<script setup>
defineProps({
  link: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <router-link :to="link" class="button-link">
    <button class="custom-button">{{ label }}</button>
  </router-link>
</template>

<style scoped>
.button-link {
  text-decoration: none;
}

.custom-button {
  padding: 20px 40px;
  border-radius: 0.75em;
  width: fit-content;
  min-width: 250px;
  background: #f1ece1;
  color: #0c0c0c;
  font-size: 1.5rem;
  border: 2px solid #0c0c0c;
  cursor: pointer;
  transition: transform 0.1s ease, background-color 0.2s;
}

.custom-button:hover {
  background-color: #e5dfd3;
  transform: scale(1.02);
}

.custom-button:active {
  transform: scale(0.98);
}
</style>
