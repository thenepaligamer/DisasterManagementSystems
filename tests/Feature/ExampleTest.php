<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->postJson('https://dms-json-hosting.herokuapp.com/api/login',['email'=>'fxdx@gmail.com', 'password'=>'1@asdfasdA']);

        $response
            ->assertStatus(201)
            ->assertJson([
                'created' => true,
            ]);

    }
}
