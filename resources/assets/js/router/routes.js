
function select_component(path){
    return () => import(`../components/${path}`).then(m => m.default || m)
}
  
  export default [
    { path: '/', name: 'employee_list', component: select_component('EmployeeList.vue') },
    { path: '/add/employee', name: 'add_employee_form', component: select_component('AddEmployeeForm.vue') }
  
    // { path: '*', component: page('errors/404.vue') }
  ]
  