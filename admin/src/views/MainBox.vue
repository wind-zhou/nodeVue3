<script setup >
import { RouterView } from 'vue-router'
import TopHeader from '../components/mainbox/TopHeader.vue'
import SideMenu from '../components/mainbox/SideMenu.vue'
</script>

<template>
    <el-container>
        <SideMenu />
        <el-container direction="vertical">
            <TopHeader />
            <el-main>
                <RouterView />
            </el-main>
        </el-container>
    </el-container>
</template>

