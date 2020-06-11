<template>
    <section class="add-employee">
        <img src="/assets/images/employee.png" alt="employee">
        <a href="#" class="btn btn-success" @click="showModal">add employee</a>
        <!-- <router-link class="btn btn-success" to="/add_employee_form">add employee</router-link> -->
    </section>
</template>
<script>
    export default {
        mounted(){
            console.log('add-employee Component mounted.')
        },
        methods:{
            showModal(){
                this.$emit('show')
            }
        }
    }
</script>