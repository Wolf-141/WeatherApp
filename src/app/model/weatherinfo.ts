export class weatherinfo{
    latitude: number = 0;
    longitude: number = 0;
    elevation: number = 0;
    timezone: string = "";
    temperature_unit = "celsius";
    time: Array<number> = [];
    weatherCode: Array<string> = [];
    is_day: Array<Boolean> = [];
    precipitation: Array<number> = [];
    precipitation_probability: Array<number> = [];
}