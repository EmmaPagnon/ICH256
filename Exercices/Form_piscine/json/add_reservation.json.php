<?php

$nb_place_dispo=10;
$reponse =array();

$reponse["type"] = "success";
$reponse["message"] = "Tout c'est bien passé";

if($_POST["eleves"]==""){
    $_POST["eleves"]=0;
}

if($_POST['eleves']+1 > $nb_place_dispo){
    $reponse["type"] = "danger";
    $reponse["message"] = "il ne reste que ".$nb_place_dispo." pour ce jour";
}
echo json_encode($reponse);
