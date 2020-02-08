<?php

include_once('includes.php');
?>

<html lang="en">
<head>
    <title>Nebu</title>
    <?php links(); ?>
</head>
<body>
<div id="index-wrapper">
    <header>
        <h1>Nebu</h1>
        <p>Listen here.</p>
    </header>
    <main id="index-content">

        <div id="loginsignup-wrapper" class="dis-n">
            <p><span class="link" id="login-link">Login</span> or <span class="link" id="signup-link">Signup</span>
            </p>
        </div>

        <form class="index-form signin">
            <small class="index-form-response"></small>
            <input class="index-form-input" type="text" name="userid" placeholder="UserID" required>
            <input class="index-form-input" type="password" name="password" placeholder="Password" required>
            <input class="button" type="submit" name="submit" value="Sign In">
            <small class="index-form-back-link">register</small>
        </form>

        <form class="index-form register">
            <small class="index-form-response"></small>
            <input class="index-form-input" type="text" name="userid" placeholder="UserID" required>
            <input class="index-form-input" type="password" name="password" placeholder="Password" required>
            <input class="button" type="submit" name="submit" value="Register">
            <small class="index-form-back-link">sign in</small>
        </form>


    </main>
</div>
</body>
</html>
