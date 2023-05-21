/**
 * 需要动态加载的路由列表
 */

import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import UserAdd from '../views/user-manage/UserAdd.vue'
import UserList from '../views/user-manage/UserList.vue'
import NewsAdd from '../views/news-manage/NewsAdd.vue'
import NewsList from '../views/news-manage/NewsList.vue'
import ProductAdd from '../views/product-manage/ProductAdd.vue'
import ProductList from '../views/product-manage/ProductList.vue'
import NotFound from '../views/notfound/NotFound.vue'

const routes = [
    {
        path: "/index",
        component: Home
    },
    {
        path: "/center",
        component: Center
    },
    {
        path: "/user-manage/adduser",
        component: UserAdd
    },
    {
        path: "/user-manage/userlist",
        component: UserList
    },

    {
        path: "/news-manage/addnews",
        component: NewsAdd
    },
    {
        path: "/news-manage/newslist",
        component: NewsList
    },

    {
        path: "/product-manage/addproduct",
        component: ProductAdd
    },
    {
        path: "/product-manage/productlist",
        component: ProductList
    },
    {
        path: "/",
        redirect: "/index"
    },
    {
        // 兜底页面
        path: "/:pathMatch(.*)*",
        name: "Notfound",
        component: NotFound
    }
]

export default routes