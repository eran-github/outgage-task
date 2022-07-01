import { isEmpty, IsNotEmpty, IsNumber, isNumberString, IsNumberString } from "class-validator";

export class ContactEntity {
  @IsNotEmpty()
  public campaign_id: string;
  @IsNotEmpty()
  public id: string;
  @IsNotEmpty()
  public first_name: string;
  @IsNotEmpty()
  public last_name: string;
  @IsNotEmpty()
  public email: string;
}
