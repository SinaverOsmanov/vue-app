<template>
  <form @submit.prevent>
    <h2>Create post</h2>
    <my-input v-focus v-model="post.title" type="text" placeholder="name" />
    <my-input v-model="post.body" type="text" placeholder="description" />
    <my-button
      style="align-self: flex-end; margin-top: 10px"
      @click="createPost"
      >create</my-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        body: "",
        title: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>