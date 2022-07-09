<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReliefsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reliefs', function (Blueprint $table) {
            $table->id();
            $table->string('district');
            $table->string('local');
            $table->date('date', $precision = 8, $scale = 3);
            $table->decimal('rice', $precision = 8, $scale = 3);
            $table->decimal('sugar', $precision = 8, $scale = 3);
            $table->decimal('salt', $precision = 8, $scale = 3);
            $table->decimal('readymade', $precision = 8, $scale = 3);
            $table->decimal('water', $precision = 8, $scale = 3);
            $table->decimal('otherfood', $precision = 8, $scale = 3);
            $table->string('housing');
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
        Schema::dropIfExists('reliefs');
    }
}