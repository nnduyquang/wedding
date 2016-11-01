<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccessoriesofplansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accessoriesofplan', function (Blueprint $table) {
            $table->integer('id_accessory')->unsigned();
            $table->integer('id_plan')->unsigned();
            $table->boolean('has_accessory')->default(false);
            $table->primary(['id_accessory','id_plan']);
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
        Schema::dropIfExists('accessoriesofplan');
    }
}
