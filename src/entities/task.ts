import { Project } from "entities";
import { Time } from "utils";

interface TaskConstructorParams {
  id: string;
  name: string;
  project: Project;
  done: boolean;
  estimatedTime: Time;
}

export class Task {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _project: Project;
  private readonly _done: boolean;
  private readonly _estimatedTime: Time;

  constructor({
    id,
    name,
    project,
    done,
    estimatedTime,
  }: TaskConstructorParams) {
    this._id = id;
    this._name = name;
    this._project = project;
    this._done = done;
    this._estimatedTime = estimatedTime;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get project(): Project {
    return this._project;
  }

  get estimatedTime(): Time {
    return this._estimatedTime;
  }

  isDone(): boolean {
    return this._done;
  }
}
