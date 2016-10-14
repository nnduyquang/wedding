<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->increments('id_plan');
            $table->string('total_time');
            $table->string('bride_outfit');
            $table->string('groom_outfit');
            $table->integer('shots');
            $table->integer('id_album')->unsigned();
            $table->foreign('id_album')->references('id_album')->on('albums');
            $table->integer('id_service')->unsigned();
            $table->foreign('id_service')->references('id_service')->on('services');
            $table->integer('id_accessory')->unsigned();
            $table->foreign('id_accessory')->references('id_accessory')->on('accessories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plans');
    }
}
