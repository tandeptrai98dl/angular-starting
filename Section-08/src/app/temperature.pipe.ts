import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temperature',
    standalone: true
})

export class TemperaturePipe implements PipeTransform {
    transform(
        value: any,
        inputType: 'celsius' | 'fahrenheit',
        outputType?: 'celsius' | 'fahrenheit') {
        let val: number;
        if (typeof value === 'string') {
            val = parseFloat(value);
        } else {
            val = value;
        }

        const finalOutputType = outputType || 'celsius';

        let outputTemp: number;
        if (inputType === 'celsius' && finalOutputType === 'fahrenheit') {
            outputTemp = val * 1.8 + 32;
        } else if (inputType === 'fahrenheit' && finalOutputType === 'celsius') {
            outputTemp = (val - 32) * 5 / 9;
        } else {
            outputTemp = val;
        }

        let symbol = finalOutputType === 'celsius' ? '°C' : '°F';

        return outputTemp.toFixed(2) + ' ' + symbol;
    }
}