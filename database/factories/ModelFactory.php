<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});


$factory->define(App\Project::class, function (Faker\Generator $faker) {
    $images = ['a','d','fs','ft','pt','sm','z'];
    return [
        'name'=>$faker->bs,
        'image_url'=>$images[rand(0,6)].'png'
    ];
});

$factory->define(App\Employee::class, function (Faker\Generator $faker) {
    $roles = [
        'Software engineer', 'Business analyst',
        'Project manager','Research engineer',
        'Support manager'
    ];
    $bonuss  = ['0','300','0','500','0','0'];
    return [
        'full_name'=>$faker->name,
        'profile_image'=>'rony.png',
        'role'=>$roles[rand(0,4)],
        'salary'=>rand(95000,250000),
        'bonus'=>$bonuss[rand(0,5)],
        'period'=>rand(1,12)
    ];
});