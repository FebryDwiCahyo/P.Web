<?php 
    include " Controllers/ProdukController.php";
use Controller\ProductController;

$produkController = new ProductController;

echo $produkController->getAllProduct();