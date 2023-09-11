<?php

//code die ik gebruik om random gegevens te verzinnen want handmatich verzinnen en erin zetten is te veel moeite


// ini_set('display_errors', '1');
// ini_set('display_startup_errors', '1');
// error_reporting(E_ALL);

// $conn = new mysqli("localhost", "maciej", "", "student_list");
// $result = $conn->prepare("SELECT * FROM students");
// $result->execute();
// $result = $result->get_result()->fetch_all(MYSQLI_ASSOC);

// foreach ($result as $row) {
//     $id = $row["id"];
//     $naam = $row["naam"];
//     $tussenvoegsel = $row["tussenvoegsel"];
//     $achternaam = $row["achternaam"];

//     $studentennumber = 40200000 + rand(0,9999);
//     $phonenumber = "0" . (600000000 + rand(0,99999999));
//     $email = $studentennumber . "@roctilburg.nl";
//     echo $studentennumber, " ", $phonenumber, " ", $email, "<br>";

//     $sql = $conn->prepare("UPDATE students SET studentnummer = ?, telefoonnummer = ?, email = ? WHERE id = $id;");
//     $sql->bind_param("iss", $studentennumber, $phonenumber, $email);
//     $sql->execute();
// }

?>