<?php
include('../config/DB.php');
$db = new DB;
$country = $_POST['country'];
if(isset($_POST['appName']) && isset($_POST['country'])){
    $country = $_POST['country'];
    $sql = "SELECT `list_apps_$country` FROM `APP_API` WHERE `App_name` = ?  ";
    $params = [$_POST['appName']];
    if($db->query($sql,$params)){
        if($db->getNumRows()){
            $result = $db->fetch();
            order_slugs($result);
        }
    }
}
function order_slugs($slugs){
  global $country;
  $slugsArr =  explode(PHP_EOL, $slugs[0]["list_apps_$country"]);
  get_slug_data($slugsArr);
}

function get_slug_data($slugsArr){
    global $_POST;
    global $db;

    $sql = "SELECT * FROM `apps_data` WHERE";
    foreach($slugsArr as $key => $item){
        $sql .= " `app_slug` = ?  OR";
    }
    $sql = trim($sql,'OR');
    if($db->query($sql,$slugsArr)){
        if($db->getNumRows()){
            $result = $db->fetch(); 
            if($_POST['type'] == 'offers'){
                $reversData = array_reverse($result);
                $data =   json_encode($reversData);
                print_r($data);die;
            }if($_POST['type'] == 'vip'){
                $sliceData = array_slice($result,2);
                $data =   json_encode($sliceData);
                print_r($data);die;
            }if($_POST['type'] == 'slots'){
                $sliceData = array_slice($result,3);
                $data =   json_encode($sliceData);
                print_r($data);die;
            }if($_POST['type'] == 'popup'){
                 $data = json_encode($result);
                 print_r($data);die;
                }
            $data = json_encode($result);
            print_r($data);
        }
    }
}



?>
