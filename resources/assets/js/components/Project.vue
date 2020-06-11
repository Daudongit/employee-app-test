<template>
    <div class="project">
        <div class="all-employee">
            <img src="/assets/images/circle.png" alt="all employee">
            <h3>All employee</h3>
        </div>
        <h3 class="title">Project</h3>
        <ul class="list">
            <li>
                <a href="#">
                    <img src="/assets/images/a.png" alt="" class="icon">
                    <span>Arena Sport</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/assets/images/d.png" alt="" class="icon">
                    <span>DSV</span>
                </a>
            </li>
            <li class="active">
                <a href="#">
                    <img src="/assets/images/sm.png" alt="" class="icon">
                    <span>Seafood Mall</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/assets/images/fs.png" alt="" class="icon">
                    <span>FireStar</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/assets/images/z.png" alt="" class="icon">
                    <span>Zeta Bank</span>
                </a>
            </li>
        </ul>
        <h3 class="title">Status</h3>
        <ul class="list">
            <li>
                <a href="#">
                    <img src="/assets/images/ft.png" alt="" class="icon">
                    <span>Full Time</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/assets/images/pt.png" alt="" class="icon">
                    <span>Part Time</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log('project Component mounted.')
        }
    }
</script>
