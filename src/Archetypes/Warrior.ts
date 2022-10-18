import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static warriorArchetypeInstance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.warriorArchetypeInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.warriorArchetypeInstance;
  }
}