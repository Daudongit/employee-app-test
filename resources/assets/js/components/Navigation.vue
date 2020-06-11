<template>
    <nav class="menu">
        <img src="/assets/images/logo.png" alt="logo" class="left">
        <ul class="main">
            <li><a href="#">Calender</a></li>
            <li><a href="#">Statistic</a></li>
            <li class="active"><a href="#">Employee</a></li>
            <li><a href="#">Client</a></li>
            <li><a href="#">Equipment</a></li>
        </ul>
        <div class="right">
            <img src="/assets/images/bell-icon.png" alt="notification">
            <img src="/assets/images/envelop-icon.png" alt="message">
            <img src="/assets/images/user-profile.png" alt="user-profile">
        </div>
    </nav>
</template>
<script>
    export default {
        mounted() {
            console.log('navigation Component mounted.')
        }
    }
</script>