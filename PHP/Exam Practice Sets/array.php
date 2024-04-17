<!-- Write a program to display sum and average of
10 numbers stored in a PHP array. -->

<?php 
    class array_operations{
        private $array;

        public function __construct($array){
            $this->array = $array;
        }

        public function get_sum(){
            $sum = 0;
            foreach ($this->array as $element){
                $sum += $element;
            }
            return $sum;
        }
    
        public function get_average(){
            $count = count($this->array);

            if ($count > 0){
                $sum = $this->get_sum();
                $avg = $sum/$count;
                return $avg;
            }
            else 
            {
                return 0;
            }
        }
    }

    $arr = [1, 14, 15, 2, 3, 54, 65, 98, 80, 12];
    $obj = new array_operations($arr);
    $sum = $obj->get_sum();
    $average = $obj->get_average();
    echo "Sum: ".$sum;
    echo "<br>";
    echo "Average: ".$average;

?>