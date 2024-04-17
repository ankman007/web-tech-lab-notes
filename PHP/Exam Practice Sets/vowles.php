<!-- Write a program in PHP that reads a file and displays vowels only -->

<?php 
    $file = fopen('exp.txt', 'r+');

    if ($file){
        while (!feof($file)){
            $line = fgets($file);
            $vowles = preg_replace('/[aeiouAEIOU]/', '', $line);
            echo $vowles;
        }
        fclose($file);

    }
    else {
        echo "Encountered error opening the file.";
    }
?>
