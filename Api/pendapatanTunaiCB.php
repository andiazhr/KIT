<?php
header("Access-Control-Allow-Origin: *");
$serverName = "103.105.253.194"; //serverName\instanceName
$connectionInfo = array( "Database"=>"DBKESHospital", "UID"=>"SA", "PWD"=>"Tidar0293");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

$tanggal = date('Ymd');

$sql = "EXEC SP_SIE_PendpTunaiCB '$tanggal', '$tanggal'";
$stmt = sqlsrv_query( $conn, $sql);
while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
     $data[] = $row;
}

echo json_encode($data);
