<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('tg_projects', function($table){
            $table->increments('id')->unsigned();
            $table->integer('tag_id')->unsigned()->nullable();
            $table->string('title', 50);
            $table->text('abstract');
            $table->text('content');
            $table->string('url_thumbnail');
            $table->string('url_image');
            $table->string('url');
            $table->integer('date')->unsigned();
            $table->enum('status', array('publish', 'unpublish', 'trash'))->default('unpublish');
            $table->foreign('tag_id')->references('id')->on('tg_tags')->onDelete('SET NULL');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropifExists('tg_projects');
    }
}
