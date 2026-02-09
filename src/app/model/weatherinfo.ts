export type weatherinfo = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: HourlyData;
}

export interface HourlyUnits {
  time: string;                     // iso8601
  weather_code: string;             // wmo code
  temperature_2m: string;           // °C
  is_day: string;
  precipitation: string;            // mm
  precipitation_probability: string; // %
}

export interface HourlyData {
  time: string[];
  weather_code: number[];
  temperature_2m: number[];
  is_day: number[];
  precipitation: number[];
  precipitation_probability: number[];
}
