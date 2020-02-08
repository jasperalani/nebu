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
        <div id="loginsignup-wrapper">
            <p><span class="link" onclick="login()">Login</span> or <span class="link" onclick="signup()">Signup</span></p>
        </div>
    </main>
</div>
</body>
</html>
