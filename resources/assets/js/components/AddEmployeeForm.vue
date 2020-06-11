<template>
    <form @submit.prevent="editMode?update():create()" @keydown="form.onKeydown($event)">
        <div class="container">
            <h1>Create Employee</h1>
            <alert-success :form="form" message="Employee created" />
            <label for="profile_image"><b>Profile Image</b></label>
            <input type="file" @change='upload_profile_image'  name="profile_image">
            <has-error :form="form" field="profile_image"></has-error>
            <hr>

            <label for="email"><b>Full name</b></label>
            <input type="text" placeholder="Enter employee fullname" 
                name="full_name" v-model="form.full_name" required>
            <has-error :form="form" field="full_name" />

            <label for="psw"><b>Role</b></label>
            <input type="text" placeholder="Enter employee role" 
                name="role" v-model="form.role" required>
            <has-error :form="form" field="role" />

            <label for="psw-repeat"><b>Salary</b></label>
            <input type="text" placeholder="Employee salary" 
                name="salary" v-model="form.salary" required>
            <has-error :form="form" field="salary" />

            <label for="psw-repeat"><b>Bonus</b></label>
            <input type="text" placeholder="Employee salary bonus" 
                name="bonus" v-model="form.bonus" required>
            <has-error :form="form" field="bonus" />

            <label for="psw-repeat"><b>Period</b></label>
            <input type="number" placeholder="Period of work" 
                name="period" v-model="form.period" required>
            <has-error :form="form" field="period" />
            <hr>
            <div class="group-btn">
                <button 
                    type="submit" class="registerbtn" 
                    :disable="form.busy" v-if="!editMode">
                    Save
                </button>
                <button 
                    type="submit" class="registerbtn" 
                    :disable="form.busy" v-if="editMode">
                    Update
                </button>
                <button type="submit" class="registerbtn danger" @click="closeModal">Close</button>
            </div>
        </div>
    </form> 
</template>
<script>
import {Form, HasError,AlertSuccess} from 'vform'
export default {
    props:{
        editMode:{
            type:Boolean,
            default:false
        },
        formData:{
            type:Object,
            default:null
        }
    },
    components:{HasError,AlertSuccess},
    data: () => ({
        id:0,
        form: new Form({
            full_name: '',
            role: '',
            salary: '',
            bonus: '',
            period: ''
        })
    }),
    mounted(){
        if(this.editMode){
            this.id = this.formData.id
            this.form.fill(this.formData)
        }
    },
    methods: {
        async create () {
            const {data} = await this.form.post('/api/employees')
            window.events.$emit('addEmployee',data.data)
            this.form.reset()
            this.closeModal()
        },
        async update () {
            const {data} = await this.form.put(`/api/employees/${this.id}`)
            window.events.$emit('updateEmployee',data.data)
            this.form.reset()
            this.closeModal()
        },
        upload_profile_image(e){
            let file = e.target.files[0];
            let reader = new FileReader();  

            if(file['size'] < 2111775)
            {
                reader.onloadend = (file) => {
                    this.form.profile_image = reader.result;
                }              
                reader.readAsDataURL(file);
            }else{
                alert('File size can not be bigger than 2 MB')
            }
        },
        closeModal(){
            this.$emit('closeModal')
        },
        //For getting Instant Uploaded Photo
        get_avatar(){
            let photo = (this.form.profile_image.length > 100) ? 
            this.form.profile_image : "upload/profile/"+ this.form.profile_image;
            return photo;
        }
    }   
}
</script>
<style scoped>
/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */
input[type=text], input[type=number],input[type=file] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=number]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity:1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
.group-btn{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
}
.danger{
    background-color: #f44336;
}
</style>