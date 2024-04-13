package net.thingswithstuff.nasaapi6175assn3.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApodResponse {
    private String copyright;
    private String date;
    private String explanation;
    private String hdurl;
    private String media_type;
    private String service_version;
    private String title;
    private String url;
}