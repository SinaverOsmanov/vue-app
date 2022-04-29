import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import PostsPage from "@/pages/PostsPage.vue";
import About from "@/pages/About.vue";
import PostPage from "@/pages/PostPage.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";
import PostPageCompositionAPI from "@/pages/PostsPageCompositionAPI.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/posts/:id",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  {
    path: "/composition",
    component: PostPageCompositionAPI,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
