<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../../stores/auth.js";

const authStore = useAuthStore();

onMounted(() => {
    console.log("AdminDashboard mounted");
});
</script>
<template>
    <h1>ADMIN DASHBOARD</h1>
    {{ authStore.isAuthenticated }}
</template>