import Race from './Race';

export default class Hafling extends Race {
  private _maxLifePoints = 60;
  static halflingRaceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Hafling.halflingRaceInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Hafling.halflingRaceInstance;
  }
}