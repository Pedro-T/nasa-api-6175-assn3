package net.thingswithstuff.nasaapi6175assn3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping(value = {"/", "/current", "/random", "/date-single", "/date-range"})
    public String index() {
        return "index";
    }

}