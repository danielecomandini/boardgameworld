import { Country } from "src/model/general/country.model";

export class DancoUtils {

    getFlag(countryCode: string) {
        let country: Country = new Country();

        if( countryCode === 'GER' ) {
            country.name = "Germany";
            country.flag = "germany.png";
        } else if( countryCode === 'USA' ) {
            country.name = "United States";
            country.flag = "usa.png";
        } else if( countryCode === 'JAP' ) {
            country.name = "Japan";
            country.flag = "japan.png";
        } else if( countryCode === 'ITA' ) {
            country.name = "Italy";
            country.flag = "ita.png";
        } else if( countryCode === 'BRA' ) {
            country.name = "Brazil";
            country.flag = "bra.png";
        } else if( countryCode === 'NED' ) {
            country.name = "Netherland";
            country.flag = "ned.png";
        } 

        return country;
    }

}