<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router'

import { options } from '../common/const';
import { useGloableStore } from '../stores';

const router = useRouter()
const gloableStore = useGloableStore();
const loginFormRef = ref() //表单的引用对象
//表单校验规则
const loginRules = reactive({
    username: [
        {
            required: true, message: "请输入用户名", trigger: "blur"
        }
    ],
    password: [
        {
            required: true, message: "请输入密码", trigger: "blur"
        }
    ]
})


// 表单状态管理对象 【类似 react antD 的 field ，用来集中管理表单状态】
const loginForm = reactive({
    username: "",
    password: ""
})// 表单绑定的响应式对象


//提交表单函数
const submitForm = () => {
    //1. 校验表单   【类比 field.validate()】
    loginFormRef.value.validate((valid) => {
        console.log(valid)
        if (valid) {
            console.log('zz-loginForm', loginForm)
            gloableStore.login(loginForm, () => {
                localStorage.setItem("token", "kerwin");
                router.push("/index")
            })
        }
    })
}
</script>


<template>
    <div>
        <Particles id="tsparticles" :options="options" />

        <div class="formContainer">
            <h3>企业门户网站管理系统</h3>
            <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="loginRules" label-width="80px"
                class="loginform">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm()">登录</el-button>

                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.formContainer {
    width: 500px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba($color: #000000, $alpha: 0.5);
    color: white;
    text-align: center;
    padding: 20px;

    h3 {
        font-size: 30px;
    }

    .loginform {
        margin-top: 20px;
    }
}

::v-deep .el-form-item__label {
    color: white;
}
</style>    
