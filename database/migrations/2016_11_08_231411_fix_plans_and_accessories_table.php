<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FixPlansAndAccessoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('plans', function ($table) {
            $table->dropForeign('plans_id_album_foreign');
        });
        Schema::drop('plans');
        Schema::drop('accessoriesofplan');
        Schema::table('accessories', function (Blueprint $table) {
            $table->integer('type')->unsigned()->nullable();
        });
        Schema::create('accessoriesofalbums', function (Blueprint $table) {
            $table->integer('id_album')->unsigned();
            $table->integer('id_accessory')->unsigned();
            $table->boolean('has_accessory')->default(false);
            $table->string('description')->nullable();
            $table->primary(['id_album','id_accessory']);
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
