<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../../stores/auth.js";

const authStore = useAuthStore();

onMounted(() => {
    console.log("StaffDashboard mounted");
});
</script>
<template>
    <h1>STAFF DASHBOARD</h1>
    {{ authStore.isAuthenticated }}
</template>