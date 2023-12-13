<?php
    require "debugging.php";

    // DEFAULT ANSWER
    $answer = array(
        "code"=>404,
        "result"=>[]
    );

    // REQUEST for ALL books: /books/
    if( isset($_GET["calendarid"]) && $_GET["calendarid"] == "" ) {

        $data = file_get_contents("../data/calendarApi.json");
        $library = json_decode($data);

        for ($i=0; $i < count($library->calendar); $i++) { 
            $answer["code"] = 200;
            array_push($answer["result"], $library->calendar[$i]);
        }
    }

    
    // SEND JSON
    echo json_encode($answer);

?>