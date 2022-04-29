<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.button {
  background: teal;
  color: white;
  padding: 10px 25px;
  border: none;
  cursor: pointer;
}
</style>