import { Client } from "core/entity";

export interface ProjectConstructorParams {
  id: string;
  name: string;
  billable?: boolean;
  active?: boolean;
  client: Client;
}

export class Project {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _billable: boolean;
  private readonly _active: boolean;
  private readonly _client: Client;

  constructor({
    id,
    name,
    billable = true,
    active = true,
    client,
  }: ProjectConstructorParams) {
    this._id = id;
    this._name = name;
    this._billable = billable;
    this._active = active;
    this._client = client;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get client(): Client {
    return this._client;
  }

  isBillable(): boolean {
    return this._billable;
  }

  isActive(): boolean {
    return this._active;
  }
}
