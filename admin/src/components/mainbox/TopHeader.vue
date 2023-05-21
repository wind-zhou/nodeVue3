<script setup >
import { useRouter } from 'vue-router'
import { useGloableStore } from '../../stores/index'
import { Menu, User } from "@element-plus/icons-vue";

const store = useGloableStore();
const router = useRouter()

const handleCollapsed = () => {
    // debug
    console.log('zz---');
    store.changeCollapsed()
}
const handleCenter = () => {
    router.push("/center")
}

const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/login")
}
</script>

<template>
    <el-header>
        <div class="left">
            <el-icon @click="handleCollapsed">
                <Menu />
            </el-icon>
            <span style="margin-left:10px;">企业门户网站管理系统</span>
        </div>
        <div class="right">

            <span>欢迎 admin 回来</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon :size="30" color="white">
                        <user />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>

                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<style lang='scss' scoped>
.el-header {
    background-color: #2d3a4b;
    color: white;
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.left,
.right {
    display: flex;
}

.left {
    i {
        margin: auto;
        cursor: pointer;
    }
}

.right {
    .el-dropdown {
        margin: auto;
    }
}
</style>