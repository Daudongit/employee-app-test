<template>
    <section class="board">
        <project />
        <employee-list />
    </section>
</template>
<script>
    import Project from './Project'
    import EmployeeList from './EmployeeList'
    export default {
        components:{Project,EmployeeList},
        mounted() {
            console.log('board Component mounted.')
        }
    }
</script>