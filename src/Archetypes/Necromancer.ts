import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static necroArchetypeInstance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.necroArchetypeInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.necroArchetypeInstance;
  }
}