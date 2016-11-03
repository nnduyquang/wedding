<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DropServicesofplansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
//        Schema::table('plans', function ($table) {
//            $table->dropForeign('plans_id_accessory_foreign');
//            $table->dropColumn('id_accessory');
//        });
        Schema::drop('servicesofplans');
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
