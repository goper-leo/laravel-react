<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HouseImage extends Model
{

  /**
   * Mass assignable fields
   *
   * @var array
   */
   protected $fillable = [
       'house_id',
       'path'
    ];

    public $timestamps = true;


}
