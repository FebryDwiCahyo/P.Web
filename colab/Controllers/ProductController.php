<?php

namespace Controller;

include "Train/ResponseFormatter.php";
include "Controllers/Controller.php";

use Traits\ResponseFormatter;
use Traits\ResponserFormatter;

class ProductController extends Controller {
    use ResponserFormatter;
    public function __construct() {
        $this->controllerName = "Get ALL Product";
        $this->controllerMethod = "GET";
    }
    public function getAllProduct(){
        $dumyData = [
            "air aqua",
            "kebab",
            "pangsit",
            "jus jambu"
        ];
        $response = [
            "controller_attribute" => $this->getControllerAtribute(),
            "product" => $dumyData,
        ];
        return $this->responseFormatter(200, "success",$response);
    }
};