import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  static halflingRaceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.halflingRaceInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.halflingRaceInstance;
  }
}