<template>
  <div>
    <h3>Post lists</h3>
    <div v-if="posts.length > 0">
      <transition-group name="post-list">
        <post-item
          @remove="$emit('remove', post)"
          v-for="post in posts"
          :post="post"
          :key="post.id"
        />
      </transition-group>
    </div>
    <h2 v-else style="color: lime">no posts</h2>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move, /* apply transition to moving elements */
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.post-list-leave-active {
  position: absolute;
}
</style>