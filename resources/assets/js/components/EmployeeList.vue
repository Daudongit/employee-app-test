<template>
    <div class="employee">
        <ul class="list-head">
            <li></li>
            <li>
                <input type="checkbox" id="check-all" class="styled-checkbox"> 
                <label for="check-all"></label>
            </li>
            <li>Employee <img src="/assets/images/arrow-up.png" alt="filter-empoyee"></li>
            <li>Salary <img src="/assets/images/arrow-up.png" alt="filter-salary"></li>
            <li>Status <img src="/assets/images/arrow-down.png" alt="filter-status"></li>
            <li>Manage</li>
        </ul>
        <ul class="employee-list">
            <li class="item" v-for="(employee, key) in employees" :key="key">
                <div class="profile">
                    <div class="check">
                        <input class="styled-checkbox" id="checkbox-1" type="checkbox">
                        <label for="checkbox-1"></label>
                    </div>
                    <img :src="`/upload/profile/${employee.profile_image}`" 
                        alt="profile picture" class="image">
                    <div class="basic-info">
                        <p class="name">{{employee.full_name}}</p>
                        <span class="job-title">{{employee.role}}</span>
                    </div>
                </div>
                <div class="salary">
                    <p class="amount">
                        <span>{{employee.salary}}NOK</span>
                        <span class="bonus" v-if="employee.bonus && employee.bonus != '0'">
                            +{{employee.bonus}}
                        </span>
                    </p>
                    <span class="position">full time</span>
                </div>
                <div class="period">
                    <p>test period</p>
                    <span class="month">{{employee.period}} months</span>
                </div>
                <div class="manage">
                    <div class="wrap">
                        <a href="#" class="edit" @click="editEmployee(employee)">
                            <img src="/assets/images/edit.png" alt="edit">
                        </a>
                        <a href="#" class="delete" @click="deleteEmployee(employee.id)">
                            <img src="/assets/images/delete.png" alt="delete"> 
                        </a>
                    </div>
                </div>
            </li>
        </ul>
        <modal v-show="isModalVisible" @close="closeModal">
            <add-employee-form 
                :editMode="true" v-if="isModalVisible"
                :formData="formData" @closeModal="closeModal" 
            />
        </modal>
    </div>
</template>
<script>
import AddEmployeeForm from './AddEmployeeForm'
import Modal from './Modal'
import axios from 'axios'

    export default {
        name:'employee_list',
        components:{Modal,AddEmployeeForm},
        data:()=>({
            employees:null,
            isModalVisible:false,
            formDataDefault:null
        }),
        computed:{
            formData(){
                return this.formDataDefault
            }
        },
        async mounted() {
            const { data } = await axios.get('/api/employees/')
            this.employees = data.data
            window.events.$on(
                'addEmployee', data => this.employees.push(data)
            )
            window.events.$on(
                'updateEmployee', data => this.employees = this.employees.map(
                    employee=>data.id == employee.id?data:employee
                )
            )
            console.log('employee-list Component mounted.')
        },
        methods:{
            editEmployee(employee){
                this.formDataDefault = employee
                this.isModalVisible = true
            },
            async deleteEmployee(id){
                const {message} = await axios.delete(`/api/employees/${id}`)
                this.employees = this.employees.filter(
                    employee=>id != employee.id
                )
            },
            closeModal(){
                this.isModalVisible = false
            }
        }
    }
</script>
<style scoped>
    .image{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>