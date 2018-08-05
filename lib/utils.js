/**
 * Vue的插件，用来获取和设置localStorage存储
 **/
let local = {
  save (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  fetch (key) {
    return JSON.parse(localStorage.getItem(key)) || {}
  },
	width(){
		return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
	}
}

// export default {
//   install: function (Vue) {
//     Vue.prototype.$local = local
//   }
// }
// 

export default{
	install: function(vm){
		vm.prototype.$local = local
	}
}