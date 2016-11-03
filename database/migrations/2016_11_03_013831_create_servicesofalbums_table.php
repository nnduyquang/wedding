<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicesofalbumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servicesofalbums', function (Blueprint $table) {
            $table->integer('id_service')->unsigned();
            $table->integer('id_album')->unsigned();
            $table->boolean('has_servive')->default(false);
            $table->string('description');
            $table->primary(['id_service','id_album']);
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
        Schema::dropIfExists('servicesofalbums');
    }
}
