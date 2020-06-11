<template>
    <!-- <router-view /> -->
    <!-- <employee-list/> -->
    <transition name="page" mode="out-in">
        <slot>
            <router-view />
        </slot>
    </transition>
</template>
<script>
// import EmployeeList from './EmployeeList'
    export default {
        name:'employee'
        // components:{EmployeeList}
        // data:()=>({
        //     employees:null
        // }),
        // async mounted() {
        //     const { data } = await axios.get('/api/employees/')
        //     this.employees = data.data
        //     // console.log(this.employees)
        //     console.log('employee Component mounted.')
        // }
    }
</script>