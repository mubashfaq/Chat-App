<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class PasswordResetController extends Controller
{
   // Step 1: Send Reset Link
   public function forgotPassword(Request $request)
   {
       $request->validate(['email' => 'required|email']);

       $status = Password::sendResetLink(
           $request->only('email')
       );

       return $status === Password::RESET_LINK_SENT
           ? response()->json(['message' => __($status)], 200)
           : response()->json(['message' => __($status)], 400);
   }

   // Step 2: Reset Password
   public function resetPassword(Request $request)
   {
       $request->validate([
           'token' => 'required',
           'email' => 'required|email',
           'password' => 'required|confirmed|min:8',
       ]);

       $status = Password::reset(
           $request->only('email', 'password', 'password_confirmation', 'token'),
           function (User $user, string $password) {
               $user->forceFill([
                   'password' => Hash::make($password),
                   'remember_token' => Str::random(60),
               ])->save();
           }
       );

       return $status === Password::PASSWORD_RESET
           ? response()->json(['message' => __($status)], 200)
           : response()->json(['message' => __($status)], 400);
   }
}
