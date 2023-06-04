<script setup>
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue';
import { useUserStore } from '../../stores/user'
import Upload from '../../components/Upload/Upload.vue'

const router = useRouter()
const userStore = useUserStore()

// 表单ref，用于表单验证
const userFormRef = ref();
// 表单的数据
const userForm = reactive({
    username: "",
    password: "",
    role: 2, //1 是管理员 ,2编辑
    introduction: "",
    avatar: "",
    file: null,
    gender: 0 //保密
});

const options = [
    {
        label: "管理员",
        value: 1
    },
    {
        label: "编辑",
        value: 2
    }
];


const userFormRules = reactive({
    username: [{ required: true, message: "请输入名字", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    role: [{ required: true, message: "请选择权限", trigger: "blur" }],
    introduction: [{ required: true, message: "请输入介绍", trigger: "blur" }],
    avatar: [{ required: true, message: "请上传头像", trigger: "blur" }]
});


const submitForm = () => {
    userFormRef.value.validate(async (valid) => {
        console.log('zz-valid', valid);
        if (valid) {
            console.log('zz-表单信息：', userForm);
            // 1. 调用接口
            const res = await userStore.addUser(userForm);
            console.log('zzz-----res', res);
            // 2. 跳转路由
            res && router.push(`/user-manage/userlist`)
        }
    })
}


//每次选择完图片之后的回调
const handleChange = file => {
    console.log('zz-handleChange', file);
    userForm.avatar = URL.createObjectURL(file);  // 将 blob 转为 url
    userForm.file = file;// 给服务端传输数据时，将图片的二进制也传过去（Blob 对象）
};

</script>


<template>
    <div>
        <el-page-header content="添加用户" icon="" title="用户管理" />

        <el-form ref="userFormRef" :model="userForm" :rules="userFormRules" label-width="80px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="userForm.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="userForm.password" type="password" />
            </el-form-item>

            <el-form-item label="角色" prop="role">
                <el-select v-model="userForm.role" class="m-2" placeholder="Select" style="width:100%">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="个人简介" prop="introduction">
                <el-input v-model="userForm.introduction" type="textarea" />
            </el-form-item>

            <el-form-item label="头像" prop="avatar">
                <Upload :avatar="userForm.avatar" @uploadChange="handleChange" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm()">添加用户</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<style lang="scss" scoped>
.demo-ruleForm {
    margin-top: 50px;
}
</style>

