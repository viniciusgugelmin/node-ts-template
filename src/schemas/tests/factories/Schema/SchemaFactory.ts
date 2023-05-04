import { faker } from "@faker-js/faker/locale/pt_BR";
import { SchemaFactoryDTO } from "./SchemaFactoryDTO";
import Joi from "joi";

class SchemaFactory implements SchemaFactoryDTO.ISchemaFactory {
  public generateData(
    data: SchemaFactoryDTO.GenerateDataDTO
  ): SchemaFactoryDTO.GenerateDataResponseDTO {
    for (const key in data) {
      if (typeof data[key] === "string") {
        data[key] = faker.lorem.word();
      }

      if (typeof data[key] === "number") {
        data[key] = faker.datatype.number();
      }

      if (typeof data[key] === "boolean") {
        data[key] = faker.datatype.boolean();
      }

      if (typeof data[key] === "object") {
        data[key] = this.generateData(data[key]);
      }
    }

    return data;
  }

  public generateSchema(
    data: SchemaFactoryDTO.GenerateSchemaDTO
  ): SchemaFactoryDTO.GenerateSchemaResponseDTO {
    const getProps = () => {
      const props = {};

      for (const key in data) {
        if (typeof data[key] === "string") {
          props[key] = Joi.string().required();
        }

        if (typeof data[key] === "number") {
          props[key] = Joi.number().required();
        }

        if (typeof data[key] === "boolean") {
          props[key] = Joi.boolean().required();
        }

        if (typeof data[key] === "object") {
          props[key] = this.generateSchema(data[key]);
        }
      }

      return props;
    };

    return Joi.object({ ...getProps() });
  }
}

export { SchemaFactory };
