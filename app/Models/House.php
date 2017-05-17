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
  ];

  public $timestamps = true;
}
