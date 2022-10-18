import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  static elfRaceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.elfRaceInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.elfRaceInstance;
  }
}