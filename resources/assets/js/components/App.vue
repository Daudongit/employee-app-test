<template>
  <div id="app">
    <transition name="page" mode="out-in">
        <div>
            <section class="site">
                <navigation />
                <add-employee @show="showModal" />
                <board />
            </section>
            <add-project />
        </div>
    </transition>
    <modal v-show="isModalVisible" @close="closeModal">
        <add-employee-form :editMode="false" @closeModal="closeModal" />
    </modal>
  </div>
</template>

<script>
import AddEmployeeForm from './AddEmployeeForm'
import AddProject from './AddProject'
import Navigation from './Navigation'
import AddEmployee from './AddEmployee'
import Board from './Board'
import Modal from './Modal'

export default {
    el: '#app',
    components:{
      AddEmployeeForm,AddProject,
      Navigation,AddEmployee,
      Board,Modal
    },
  data: ()=>({
    isModalVisible:false,
  }),

  methods:{
    showModal(){
      this.isModalVisible = true,
      this.modalContent = {
        path:'add-employee-form'
      }
    },
    closeModal(){
      this.isModalVisible = false
    }
  }
}
</script>
