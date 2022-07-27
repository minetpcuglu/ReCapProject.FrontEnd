import { CarDetail } from "./carDetail";
import { ResponseModel } from "./responseModule";

export interface CarDetailResponseModel extends ResponseModel{  //gelen datayı karsılayacak olan yapı arabalar listelendi ...
data:CarDetail[]
}