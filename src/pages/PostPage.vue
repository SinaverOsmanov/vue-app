<template>
  <div>
    <div v-if="!post">Loading...</div>
    <div v-else>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: null,
    };
  },
  created() {},
  methods: {
    async fetchPost(id) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        this.post = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.fetchPost(id);
  },
};
</script>

<style>
</style>