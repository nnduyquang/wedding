<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlbumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('albums');
        Schema::create('albums', function (Blueprint $table) {
            $table->increments('id_album');
            $table->string('name');
            $table->text('description');
            $table->text('images');
            $table->integer('id')->unsigned();
            $table->foreign('id')->references('id')->on('users');//Tham chieu khoa ngoai bang users
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
        //
    }
}
