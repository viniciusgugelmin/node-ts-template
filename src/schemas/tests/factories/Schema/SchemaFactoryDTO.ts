import { ObjectSchema } from "joi";

namespace SchemaFactoryDTO {
  export interface ISchemaFactory {
    generateData(data: GenerateDataDTO): GenerateDataResponseDTO;

    generateSchema(data: GenerateSchemaDTO): GenerateSchemaResponseDTO;
  }

  export type GenerateDataDTO = Object;

  export type GenerateDataResponseDTO = Object;

  export type GenerateSchemaDTO = Object;

  export type GenerateSchemaResponseDTO = ObjectSchema;
}

export { SchemaFactoryDTO };
