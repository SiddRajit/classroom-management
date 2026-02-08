import {
  DataProvider,
  GetListParams,
  GetListResponse,
  BaseRecord,
} from "@refinedev/core";
import { MOCK_SUBEJCTS } from "@/constants";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    return {
      data: MOCK_SUBEJCTS as unknown as TData[],
      total: MOCK_SUBEJCTS.length,
    };
  },

  getOne: async () => {
    throw new Error("This function is not present yet");
  },
  create: async () => {
    throw new Error("This function is not present yet");
  },
  update: async () => {
    throw new Error("This function is not present yet");
  },
  deleteOne: async () => {
    throw new Error("This function is not present yet");
  },
};
