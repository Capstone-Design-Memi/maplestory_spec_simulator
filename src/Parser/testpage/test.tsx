import React, { useEffect } from 'react';
import { MapleUtilsParser } from '../maple-util-parser';

const test = () => {
    
    const parser = MapleUtilsParser.new();
    parser.getCharacter({
            name: '섀도어병장님',
            cash: true,
            pet: true,
            equip: true,
            symbol: true
    }).then((character) => console.log(character));
    
    parser.getCharacterWithErrors({
        name: '섀도어병장님',
        cash: true,
        pet: true,
        equip: true,
        symbol: true
    }).then(({data: character, errors}) => {
        console.log(character);
        if(errors?.equipments) {
            errors?.equipments()?.then(equipments => console.log(equipments));
        }
        if(errors?.arcanes) {
            errors?.arcanes()?.then(symbols => console.log(symbols));
        }
        if(errors?.petEquipments) {
            errors.petEquipments()?.then(petEquipments => console.log(petEquipments));
        }
        if(errors?.cashEquipments) {
            errors?.cashEquipments()?.then(cashEquipments => console.log(cashEquipments));
        }
    })
}

export default test;


