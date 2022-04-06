import { v4 as uuid } from "uuid";

export function getUserId(): string {
    return 'this-userId'
}

export function getGuid(): string {
    return uuid();
}