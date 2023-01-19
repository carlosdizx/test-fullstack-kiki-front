export default class CivilizedPokemon {
  public uuid: string;
  public readonly name: string;
  public readonly documentNumber: string;
  public readonly documentType: string;
  public readonly speciesPokemon: string;
  public readonly typePokemon: string;

  constructor(name: string, documentNumber: string, documentType: string, speciesPokemon: string, typePokemon: string) {
    this.uuid = "";
    this.name = name;
    this.documentNumber = documentNumber;
    this.documentType = documentType;
    this.speciesPokemon = speciesPokemon;
    this.typePokemon = typePokemon;
  }
}
