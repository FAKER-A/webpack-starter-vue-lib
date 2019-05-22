const install = (Vue) => {
  
  Vue.prototype.$alert = function() {
    console.log('alert')
    window.alert('alert')
  }
} 
export default {
  install
}