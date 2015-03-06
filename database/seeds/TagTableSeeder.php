<?php
use Illuminate\Database\Seeder;

class TagTableSeeder extends Seeder{
    public function run() {
        DB::table('tg_tags')->delete();
        DB::unprepared('ALTER TABLE tg_tags AUTO_INCREMENT=1');
        DB::table('tg_tags')->insert(
            [
                [
                    "name"=>"javascript"
                ],
                [
                    "name"=>"PHP OOP"
                ],
                [
                    "name"=>"Laravel"
                ],
                [
                    "name"=>"Back-end"
                ],
                [
                    "name"=>"Front-end"
                ]
            ]
        );
    }
}