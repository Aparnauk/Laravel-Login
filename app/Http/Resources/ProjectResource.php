<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
      //name, description, user_id
      return[

        'id' => $this->id,
        'name' => $this->name,
        'user_id'=>new UserResource($this->user_id),
        'description'=>$this->description,
        
      ];


    }
}
