<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{

  /**
   * Mass assignable fields
   *
   * @var array
   */
  protected $fillable = [
    'name',
    'description',
    'lat',
    'long',
    'reviews',
    'rating',

  ];

    public $timestamps = true;

  /**
   * Get all subscribers
   *
   * @return Relationship
   * @author goper
   */
   public function images()
   {
       return $this->hasMany('App\Models\HouseImage');
   }
}
