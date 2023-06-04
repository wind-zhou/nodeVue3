<script setup >
import { useGloableStore } from '../../stores/index'
import { HomeFilled, Avatar, UserFilled, MessageBox, Reading } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import router from '../../router';

const route = useRoute()
const store = useGloableStore();

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath, '--select')
    router.push(key)
}
// 自定义指令，用于在没有权限时，删除节点
const vAdmin = {
    mounted(el) {
        // console.log(el)
        if (store.userInfo.role !== 1) {
            el.parentNode.removeChild(el)
        }
    }
}
</script>

<template>
    <el-aside :class="classes.elSide" :width="store.isCollapsed ? '64px' : '240px'">
        <el-menu :default-active="route.fullPath" :class="classes.elMenu" :collapse="store.isCollapsed"
            :collapse-transition="false" @select="handleSelect">
            <el-menu-item index="/index">
                <el-icon><home-filled /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/center">
                <el-icon>
                    <avatar />
                </el-icon>
                <span>个人中心</span>
            </el-menu-item>

            <el-sub-menu index="/user-manage" v-admin>
                <template #title>
                    <el-icon>
                        <user-filled />
                    </el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/user-manage/adduser">添加用户</el-menu-item>
                <el-menu-item index="/user-manage/userlist">用户列表</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/news-manage">
                <template #title>
                    <el-icon>
                        <message-box />
                    </el-icon>
                    <span>新闻管理</span>
                </template>
                <el-menu-item index="/news-manage/addnews">创建新闻</el-menu-item>
                <el-menu-item index="/news-manage/newslist">新闻列表</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/product-manage">
                <template #title>
                    <el-icon>
                        <reading />
                    </el-icon>
                    <span>产品管理</span>
                </template>
                <el-menu-item index="/product-manage/addproduct">添加产品</el-menu-item>
                <el-menu-item index="/product-manage/productlist">产品列表</el-menu-item>
            </el-sub-menu>
        </el-menu>

    </el-aside>
</template>

<style lang='scss' module='classes'>
.elSide {
    height: 100vh;


    .elMenu {
        height: 100vh;
    }
}
</style>