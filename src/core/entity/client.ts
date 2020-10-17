export interface ClientConstructorParams {
  id: string;
  name: string;
}

export class Client {
  private readonly _id: string;
  private readonly _name: string;

  constructor({ id, name }: ClientConstructorParams) {
    this._id = id;
    this._name = name;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
}
