<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('province');
            $table->string('district');
            $table->string('local');
            $table->string('type');
            $table->decimal('lat',$precision = 8, $scale = 5);
            $table->decimal('long',$precision = 8, $scale = 5);
            $table->string('description');
            $table->integer('estloss');
            $table->integer('death');
            $table->integer('missing');
            $table->integer('injured');
            $table->boolean('is_verified');
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
        Schema::dropIfExists('events');
    }
}
