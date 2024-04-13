package net.thingswithstuff.nasaapi6175assn3.service.apod;

import net.thingswithstuff.nasaapi6175assn3.domain.ApodResponse;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ApodService {
    List<ApodResponse> getApod(String date, String start_date, String end_date, String count, String thumbs, String api_key);
}