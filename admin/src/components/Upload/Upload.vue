<!-- 自定义 上传组件 -->

<script setup >
import { computed, defineProps, defineEmits } from 'vue'
import { Plus } from "@element-plus/icons-vue";

const emit = defineEmits(['uploadChange'])
const props = defineProps(['avatar'])

// 计算属性： 用于头像
const uploadAvatar = computed(() =>
    props.avatar.includes("blob")
        ? props.avatar
        : "http://localhost:3000" + props.avatar
);

const handleChange = (file) => {
    emit('uploadChange', file.raw)
}

</script>

<template>
    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
        :auto-upload="false" :on-change="handleChange">
        <img v-if="props.avatar" :src="uploadAvatar" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon">
            <Plus />
        </el-icon>
    </el-upload>
</template>

<style lang='scss' scoped>
::v-deep .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

::v-deep .el-upload:hover {
    border-color: var(--el-color-primary);
}

::v-deep .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
}
</style>