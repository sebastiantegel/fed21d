import { Main } from "./models/Main";
import { DataService } from "./services/DataService";
import { IDataService } from "./services/IDataService";
import { MockDataService } from "./services/MockDataService";

window.onload = function () {
  let main = new Main();

  // Choose which data source to use, the fake (mocked) data or the real data
  let service: IDataService = new DataService();
  //   let service: IDataService = new MockDataService();

  main.Start(service);
};
