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
        <form class="index-form">
            <input class="index-form-input" type="text" name="userid" placeholder="UserID" required>
            <input class="index-form-input" type="password" name="password" placeholder="Password" required>
            <input class="button" type="submit" name="submit" value="Sign In">
        </form>
        <div id="loginsignup-wrapper" class="dis-n">
            <p><span class="link" onclick="login()">Login</span> or <span class="link" onclick="signup()">Signup</span></p>
        </div>
    </main>
</div>
</body>
</html>
