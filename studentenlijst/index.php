<?php

$conn = new mysqli("localhost", "maciej", "", "student_list");
if (isset($_GET["sorttype"]) && $_GET["sorttype"] == "z-a") {
    $result = $conn->prepare("SELECT * FROM students ORDER BY achternaam DESC");
}else {
    $result = $conn->prepare("SELECT * FROM students ORDER BY achternaam");
}

$result->execute();
$result = $result->get_result()->fetch_all(MYSQLI_ASSOC);

$data = [];

foreach ($result as $row) {
    $id = $row["id"];
    $naam = $row["naam"];
    $tussenvoegsel = $row["tussenvoegsel"];
    $achternaam = $row["achternaam"];
    $studentnummer = $row["studentnummer"];
    $telefoonnummer = $row["telefoonnummer"];
    $email = $row["email"];

    $data[$achternaam] = array("id" => $id, "naam" => $naam, "tussenvoegsel" => $tussenvoegsel, "achternaam" => $achternaam, 
    "studentnummer" => $studentnummer, "telefoonnummer" => $telefoonnummer, "email" => $email);
}

session_start();
$_SESSION["data"] = json_encode($data);

header("Location: homepage/homepage.php");

?>