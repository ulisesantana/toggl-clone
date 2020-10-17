import { Time } from "utils";
import { Task } from "core/entity";

export interface TimeEntryConstructorParams {
  id: string;
  task: Task;
  startTime?: Date;
  stopTime?: Date;
  duration?: Time;
}

export class TimeEntry {
  private readonly _id: string;
  private readonly _task: Task;
  private readonly _duration?: Time;
  private readonly _startTime: Date;
  private _stopTime?: Date;
  private _active: boolean;

  constructor({
    id,
    task,
    startTime = new Date(),
    stopTime,
    duration,
  }: TimeEntryConstructorParams) {
    this._id = id;
    this._task = task;
    this._duration = duration;
    this._startTime = startTime;
    this._stopTime = stopTime;
    this._active = !stopTime;
  }

  get id(): string {
    return this._id;
  }

  get task(): Task {
    return this._task;
  }

  get name(): string {
    return this.task.name;
  }

  get startTime(): Date {
    return this._startTime;
  }

  get stopTime(): Date {
    return this._stopTime || new Date();
  }

  get duration(): Time {
    return (
      this._duration ||
      new Time(this.stopTime.getTime() - this.startTime.getTime())
    );
  }

  isActive(): boolean {
    return this._active;
  }

  stop(): void {
    this._stopTime = new Date();
    this._active = false;
  }
}
