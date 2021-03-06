<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
    <title>Employee</title>
</head>
<body>
    <section class="site">
        <nav class="menu">
            <img src="assets/images/logo.png" alt="logo" class="left">
            <ul class="main">
                <li><a href="#">Calender</a></li>
                <li><a href="#">Statistic</a></li>
                <li class="active"><a href="#">Employee</a></li>
                <li><a href="#">Client</a></li>
                <li><a href="#">Equipment</a></li>
            </ul>
            <div class="right">
                <img src="assets/images/bell-icon.png" alt="notification">
                <img src="assets/images/envelop-icon.png" alt="message">
                <img src="assets/images/user-profile.png" alt="user-profile">
            </div>
        </nav>
        <section class="add-employee">
            <img src="assets/images/employee.png" alt="employee">
            <a href="#" class="btn btn-success">add employee</a>
        </section>
        <section class="board">
            <div class="project">
                <div class="all-employee">
                    <img src="assets/images/circle.png" alt="all employee">
                    <h3>All employee</h3>
                </div>
                <h3 class="title">Project</h3>
                <ul class="list">
                    <li>
                        <a href="#">
                            <img src="assets/images/a.png" alt="" class="icon">
                            <span>Arena Sport</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/images/d.png" alt="" class="icon">
                            <span>DSV</span>
                        </a>
                    </li>
                    <li class="active">
                        <a href="#">
                            <img src="assets/images/sm.png" alt="" class="icon">
                            <span>Seafood Mall</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/images/fs.png" alt="" class="icon">
                            <span>FireStar</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/images/z.png" alt="" class="icon">
                            <span>Zeta Bank</span>
                        </a>
                    </li>
                </ul>
                <h3 class="title">Status</h3>
                <ul class="list">
                    <li>
                        <a href="#">
                            <img src="assets/images/ft.png" alt="" class="icon">
                            <span>Full Time</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/images/pt.png" alt="" class="icon">
                            <span>Part Time</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="employee">
                <ul class="list-head">
                    <li></li>
                    <li>
                        <input type="checkbox" id="check-all" class="styled-checkbox"> 
                        <label for="check-all"></label>
                    </li>
                    <li>Employee <img src="assets/images/arrow-up.png" alt="filter-empoyee"></li>
                    <li>Salary <img src="assets/images/arrow-up.png" alt="filter-salary"></li>
                    <li>Status <img src="assets/images/arrow-down.png" alt="filter-status"></li>
                    <li>Manage</li>
                </ul>
                <ul class="employee-list">
                    <li class="item">
                        <div class="profile">
                            <div class="check">
                                <input class="styled-checkbox" id="checkbox-1" type="checkbox">
                                <label for="checkbox-1"></label>
                            </div>
                            <img src="assets/images/rony.png" alt="profile picture" class="image">
                            <div class="basic-info">
                                <p class="name">Ronny Asmo</p>
                                <span class="job-title">Software engineer</span>
                            </div>
                        </div>
                        <div class="salary">
                            <p class="amount">
                                <span>3.200 NOK</span>
                                <span class="bonus">+300</span>
                            </p>
                            <span class="position">full time</span>
                        </div>
                        <div class="period">
                            <p>test period</p>
                            <span class="month">2 months</span>
                        </div>
                        <div class="manage">
                            <div class="wrap">
                                <a href="#" class="edit">
                                    <img src="assets/images/edit.png" alt="edit">
                                </a>
                                <a href="#" class="delete">
                                    <img src="assets/images/delete.png" alt="delete"> 
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="profile">
                            <div class="check">
                                <input class="styled-checkbox" id="checkbox-2" type="checkbox">
                                <label for="checkbox-2"></label>
                            </div>
                            <img src="assets/images/tomas.png" alt="profile picture" class="image">
                            <div class="basic-info">
                                <p class="name">Tomas Lonsetteig</p>
                                <span class="job-title">Business analyst</span>
                            </div>
                        </div>
                        <div class="salary">
                            <p class="amount">
                                <span>4.000 NOK</span>
                            </p>
                            <span class="position">full time</span>
                        </div>
                        <div class="period">
                            <p>test period</p>
                            <span class="month">15 months</span>
                        </div>
                        <div class="manage">
                            <div class="wrap">
                                <a href="#" class="edit">
                                    <img src="assets/images/edit.png" alt="edit">
                                </a>
                                <a href="#" class="delete">
                                    <img src="assets/images/delete-active.png" alt="delete"> 
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="profile">
                            <div class="check">
                                <input class="styled-checkbox" id="checkbox-3" type="checkbox">
                                <label for="checkbox-3"></label>
                            </div>
                            <img src="assets/images/kathrine.png" alt="profile picture" class="image">
                            <div class="basic-info">
                                <p class="name">Kathrine Lonsetteig</p>
                                <span class="job-title">Project manager</span>
                            </div>
                        </div>
                        <div class="salary">
                            <p class="amount">
                                <span>2.800 NOK</span>
                                <span class="deduce">-50</span>
                            </p>
                            <span class="position">full time</span>
                        </div>
                        <div class="period">
                            <p>test period</p>
                            <span class="month">1 year</span>
                        </div>
                        <div class="manage">
                            <div class="wrap">
                                <a href="#" class="edit">
                                    <img src="assets/images/edit.png" alt="edit">
                                </a>
                                <a href="#" class="delete">
                                    <img src="assets/images/delete.png" alt="delete"> 
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="profile">
                            <div class="check">
                                <input class="styled-checkbox" id="checkbox-4" type="checkbox">
                                <label for="checkbox-4"></label>
                            </div>
                            <img src="assets/images/arne.png" alt="profile picture" class="image">
                            <div class="basic-info">
                                <p class="name">Arne Opheim</p>
                                <span class="job-title">Research engineer</span>
                            </div>
                        </div>
                        <div class="salary">
                            <p class="amount">
                                <span>1.600 NOK</span>
                            </p>
                            <span class="position">full time</span>
                        </div>
                        <div class="period">
                            <p>worker</p>
                            <span class="month">15 years</span>
                        </div>
                        <div class="manage">
                            <div class="wrap">
                                <a href="#" class="edit">
                                    <img src="assets/images/edit.png" alt="edit">
                                </a>
                                <a href="#" class="delete">
                                    <img src="assets/images/delete.png" alt="delete"> 
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="profile">
                            <div class="check">
                                <input class="styled-checkbox" id="checkbox-5" type="checkbox">
                                <label for="checkbox-5"></label>
                            </div>
                            <img src="assets/images/ingrid.png" alt="profile picture" class="image">
                            <div class="basic-info">
                                <p class="name">Ingrid Oline</p>
                                <span class="job-title">Software engineer</span>
                            </div>
                        </div>
                        <div class="salary">
                            <p class="amount">
                                <span>5.000 NOK</span>
                                <span class="bonus">+300</span>
                            </p>
                            <span class="position">full time</span>
                        </div>
                        <div class="period">
                            <p>worker</p>
                            <span class="month">15 years</span>
                        </div>
                        <div class="manage">
                            <div class="wrap">
                                <a href="#" class="edit">
                                    <img src="assets/images/edit.png" alt="edit">
                                </a>
                                <a href="#" class="delete">
                                    <img src="assets/images/delete.png" alt="delete"> 
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="profile">
                            <div class="check">
                                <input class="styled-checkbox" id="checkbox-6" type="checkbox">
                                <label for="checkbox-6"></label>
                            </div>
                            <img src="assets/images/simon.png" alt="profile picture" class="image">
                            <div class="basic-info">
                                <p class="name">Simon Ng</p>
                                <span class="job-title">Support manager</span>
                            </div>
                        </div>
                        <div class="salary">
                            <p class="amount">
                                <span>3.200 NOK</span>
                            </p>
                            <span class="position">full time</span>
                        </div>
                        <div class="period">
                            <p>worker</p>
                            <span class="month">2 years</span>
                        </div>
                        <div class="manage">
                            <div class="wrap">
                                <a href="#" class="edit">
                                    <img src="assets/images/edit.png" alt="edit">
                                </a>
                                <a href="#" class="delete">
                                    <img src="assets/images/delete.png" alt="delete"> 
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="profile">
                            <div class="check">
                                <input class="styled-checkbox" id="checkbox-7" type="checkbox">
                                <label for="checkbox-7"></label>
                            </div>
                            <img src="assets/images/berg.png" alt="profile picture" class="image">
                            <div class="basic-info">
                                <p class="name">Berg Moe</p>
                                <span class="job-title">Support manager</span>
                            </div>
                        </div>
                        <div class="salary">
                            <p class="amount">
                                <span>3.200 NOK</span>
                            </p>
                            <span class="position">full time</span>
                        </div>
                        <div class="period">
                            <p>worker</p>
                            <span class="month">2 years</span>
                        </div>
                        <div class="manage">
                            <div class="wrap">
                                <a href="#" class="edit">
                                    <img src="assets/images/edit.png" alt="edit">
                                </a>
                                <a href="#" class="delete">
                                    <img src="assets/images/delete.png" alt="delete"> 
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </section>
    <section class="add-project">
        <div class="wrapper">
            <div class="employee-foot">
                <a href="#" class="btn btn-info btn-lg">add project</a>
            </div>
        </div>
    </section>
</body>
</html>