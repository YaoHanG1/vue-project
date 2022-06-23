import Vue from 'vue'
import App from './App.vue'
import { 
  Button,
  Container,
  Main, 
  Header, 
  Aside, 
  Menu,
  Submenu, 
  MenuItem, 
  MenuItemGroup, 
  Dropdown, 
  DropdownMenu, 
  DropdownItem, 
  Row, 
  Col, 
  Card, 
  Table, 
  TableColumn,
  Breadcrumb, 
  BreadcrumbItem,
  Tag,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Switch,
  DatePicker,
  Dialog,
  Pagination,
  Message,
  MessageBox
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/less/index.less'
Vue.config.productionTip = false
import store from './store'
import router from '../src/router'
import http from 'axios'
import '../api/mock.js'
Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)

Vue.prototype.$Http = http;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message

router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login') {
    next({name: 'login'})
  }else if(token && to.name === 'login'){
    next({name: 'home'})
  }
  else {
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    store.commit('addMenu', router)
  },
}).$mount('#app')
