import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/jobs/results",
            name: "Results",
            component: JobResultsView,
        },
    ],
})

export default router