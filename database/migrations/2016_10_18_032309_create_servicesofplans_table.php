<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicesofplansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servicesofplans', function (Blueprint $table) {
            $table->integer('id_service')->unsigned();
            $table->integer('id_plan')->unsigned();
            $table->boolean('has_servive')->default(false);
            $table->string('description');
            $table->primary(['id_service','id_plan']);
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
        Schema::dropIfExists('servicesofplans');
    }
}
