import {
  ValidationOptions,
  registerDecorator,
  ValidationArguments,
} from 'class-validator';
import { Position } from '../enums/position.enum';

export function IsNotGoalkeeperWithSaves(
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isNotGoalkeeperWithSaves',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(saves: number, args: ValidationArguments): boolean {
          const relatedPropertyName = 'position';
          const relatedPropertyValue = args.object[relatedPropertyName];

          console.log('saves', saves);
          console.log('arg', args);

          // Allow if the position is "Goalkeeper", regardless of number of saves

          if (relatedPropertyValue === Position.GK) {
            return true;
          }

          // We are sure the player is NOT a goalkeeper

          if (saves > 0) {
            return false;
          } else {
            return true;
          }

          //  short version
          // return saves <= 0
        },
      },
    });
  };
}
