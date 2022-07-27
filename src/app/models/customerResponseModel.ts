import { Customer } from "./customer";
import { ResponseModel } from "./responseModule";

export interface CustomerResponseModel extends ResponseModel{  //gelen datayı karsılayacak olan yapı arabalar listelendi ...
data:Customer[]
}