<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->increments('id_service');
            $table->boolean('makeup')->default(true);
            $table->boolean('photo_props')->default(true);
            $table->string('albums');
            $table->integer('max_number_photo')->unsigned();
            $table->boolean('ship')->default(false);
            $table->boolean('a3_photo_data')->default(true);
            $table->boolean('all_photo_data')->default(true);
            $table->boolean('simple_edited_photo_data')->default(true);
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
        Schema::dropIfExists('services');
    }
}
