import { Brand } from "./brand";
import { ResponseModel } from "./responseModule";

export interface BrandResponseModel extends ResponseModel{  //gelen datayı karsılayacak olan yapı arabalar listelendi ...
data:Brand[]
}