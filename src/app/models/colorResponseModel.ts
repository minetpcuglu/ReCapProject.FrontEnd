import { Color } from "./color";
import { ResponseModel } from "./responseModule";

export interface ColorResponseModel extends ResponseModel{  //gelen datayı karsılayacak olan yapı arabalar listelendi ...
data:Color[]
}