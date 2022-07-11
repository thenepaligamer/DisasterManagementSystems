<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->string('organization');
            $table->string('location');
            $table->string('spokesman');
            $table->integer('phone');
            /*$table->string('warehouse');
            $table->string('item')->nullable();
            $table->decimal('packet', $precision = 8, $scale = 3)->nullable();
            $table->decimal('quantity',$precision = 8, $scale = 3)->nullable();*/
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
        Schema::dropIfExists('inventories');
    }
}
