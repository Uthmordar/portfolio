<?php
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder{
    public function run() {
        DB::table('users')->delete();
        DB::unprepared('ALTER TABLE users AUTO_INCREMENT=1');
        DB::table('users')->insert(
            [
                ['name'=>'Tanguy',
                 'email'=>'tanguyrygodin@gmail.com'
                ]
            ]
        );
    }
}