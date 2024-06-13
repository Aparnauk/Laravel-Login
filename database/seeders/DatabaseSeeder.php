<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Aparna',
            'email' => 'aparnauk22@gmail.com',
            'username'=> 'aparna',
            'password' => bcrypt('9562432722'),
            'email_verified_at'=>time(),
        ]);
    }
}
