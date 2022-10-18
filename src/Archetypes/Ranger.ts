import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  static rangerArchetypeInstance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.rangerArchetypeInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.rangerArchetypeInstance;
  }
}