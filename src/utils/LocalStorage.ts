import {ICat} from "../models/ICat";

export class $LocalStorage {
  private static _catsSaveName = "favCats"
  static saveFavCats = (cats: ICat[]) => {
    localStorage.setItem(this._catsSaveName, JSON.stringify(cats))
  }
  static getFavCats = (): ICat[] => {
    return JSON.parse(localStorage.getItem(this._catsSaveName) || "[]");
  }
}