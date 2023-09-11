<?php

session_start();
$encodedData = $_SESSION["data"];
$data = json_decode($_SESSION["data"]);

echo "<spam id='data'>";
echo $encodedData;
echo "</spam>";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leeringen Lijst</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comic+Sans+MS">
    <style>

    </style>
</head>
<body>
    <div id="searchcontainer">
        <input type="text" placeholder="Zoeken" id="search">
        <div id="recomendations"></div>
    </div>
    <form action="../index.php" method="get">
        <label for="sorttype">Sorteren op achternaam:</label> 
        <select name="sorttype"> 
            <option value="a-z">a-z</option> 
            <option value="z-a">z-a</option> 
        </select>
        <button type="submit">ga</button>
    </form>
    <div id="studentvakcontainer"></div>

    <div id="studentinfocontainer">
        <div id="studentphotobig"></div>
        <div id="studentinfo">maciej kwiatkwoski<br>06768587687<br>342533@email.com</div>
    </div>

    <script src="app.js"></script>
</body>
</html>