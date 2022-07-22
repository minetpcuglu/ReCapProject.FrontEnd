import { Car } from "./car";
import { ResponseModel } from "./responseModule";

export interface CarResponseModel extends ResponseModel{  //gelen datayı karsılayacak olan yapı arabalar listelendi ...
data:Car[]
}