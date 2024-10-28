<?php
for($i = 1; $i <= 6; $i++) {
    // Print spaces first
    for($j = 1; $j <= 6-$i; $j++) {
        echo " ";
    }
    // Print asterisks
    for($k = 1; $k <= (2*$i-1); $k++) {
        echo "*";
    }
    echo "\n"; // New line after each row
}
?>