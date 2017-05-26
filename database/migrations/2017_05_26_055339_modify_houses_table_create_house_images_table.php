<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModifyHousesTableCreateHouseImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('houses', function (Blueprint $table) {
            $table->string('reviews');
            $table->string('rating');
        });

        Schema::create('house_images', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('house_id')->unsigned()->nullable();
            $table->string('path');
            $table->timestamps();

            $table->foreign('house_id')->references('id')->on('houses')
						->onDelete('cascade')
						->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('house_images');
    }
}
