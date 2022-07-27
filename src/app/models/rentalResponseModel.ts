import { Rental } from "./rental";
import { ResponseModel } from "./responseModule";

export interface RentalResponseModel extends ResponseModel{  //gelen datayı karsılayacak olan yapı arabalar listelendi ...
data:Rental[]
}