import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class StringFormatService {

    constructor() { }

    getArtistNames(names: string[]) {
        let artistNamesString = '';
        names.forEach((name, index) => {
            if (index === names.length - 1) {
                artistNamesString += name;
            } else {
                artistNamesString += name + ', ';
            }
        });

        return artistNamesString;
    }
  }
