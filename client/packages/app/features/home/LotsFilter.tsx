import React, { FC } from "react";
import { HStack, SelectItem, Spinner } from "@gluestack-ui/themed";
import { HighLevelSelect } from "app/features/home/HighLevelSelect";
import { gql } from "app/src/__generated__";
import { useQuery } from "@apollo/client";
import { SortOrder } from "app/src/__generated__/graphql";

const GET_VEHICLE_TYPES = gql(/* GraphQL */ `
  query VehicleTypesFilterQuery(
    $orderBy: [VehicleTypeOrderByWithRelationInput!]
  ) {
    vehicleTypes(orderBy: $orderBy) {
      id
      name
    }
  }
`);

const GET_MAKES = gql(/* GraphQL */ `
  query MakesFilterQuery(
    $where: MakeWhereInput
    $orderBy: [MakeOrderByWithRelationInput!]
  ) {
    makes(where: $where, orderBy: $orderBy) {
      name
      id
    }
  }
`);

const GET_MODELS = gql(/* GraphQL */ `
  query ModelsFilterQuery(
    $orderBy: [ModelOrderByWithRelationInput!]
    $where: ModelWhereInput
  ) {
    models(orderBy: $orderBy, where: $where) {
      id
      name
    }
  }
`);

export type FilterParams = {
  vehicleTypeId?: string;
  makeId?: string;
  modelId?: string;
};

export const LotsFilter: FC<{
  filterParams: FilterParams;
  setFilterParams: (nextFilterParams: FilterParams) => void;
}> = ({ filterParams, setFilterParams }) => {
  const {
    data: getVehicleTypesQueryData,
    loading: getVehicleTypesQueryLoading,
  } = useQuery(GET_VEHICLE_TYPES, {
    variables: {
      orderBy: [
        {
          name: SortOrder.Asc,
        },
      ],
    },
  });

  const { vehicleTypeId, makeId, modelId } = filterParams;

  const vehicleTypes = getVehicleTypesQueryData?.vehicleTypes || [];

  const setVehicleTypeId = (nextVehicleTypeId: string) => {
    if (nextVehicleTypeId === "") {
      const { vehicleTypeId, ...nextFilterParams } = filterParams;

      setFilterParams(nextFilterParams);

      return;
    }

    setFilterParams({
      ...filterParams,
      vehicleTypeId: nextVehicleTypeId,
    });
  };

  const { data: getMakesQueryData, loading: getMakesQueryLoading } = useQuery(
    GET_MAKES,
    {
      variables: {
        orderBy: [
          {
            name: SortOrder.Asc,
          },
        ],
        // where: {
        //   models: {
        //     some: {
        //       vehicles: {
        //         some: {
        //           vehicleTypeId: {
        //             equals: selectedVehicleTypeId,
        //           },
        //         },
        //       },
        //     },
        //   },
        // },
      },
    },
  );

  const makes = getMakesQueryData?.makes || [];

  const setMakeId = (nextMakeId: string) => {
    if (nextMakeId === "") {
      const { makeId, modelId, ...nextFilterParams } = filterParams;

      setFilterParams(nextFilterParams);

      return;
    }

    setFilterParams({
      vehicleTypeId,
      makeId: nextMakeId,
    });
  };

  const { data: getModelsQueryData, loading: getModelsQueryDataLoading } =
    useQuery(GET_MODELS, {
      skip: makeId === undefined,
      variables: {
        orderBy: [
          {
            name: SortOrder.Asc,
          },
        ],
        where: {
          makeId: {
            equals: makeId,
          },
        },
      },
    });

  const models = getModelsQueryData?.models || [];

  const setModelId = (nextModelId: string) => {
    if (nextModelId === "") {
      const { modelId, ...nextFilterParams } = filterParams;

      setFilterParams(nextFilterParams);

      return;
    }

    setFilterParams({
      ...filterParams,
      modelId: nextModelId,
    });
  };

  return (
    <HStack space="sm">
      <HStack>
        {getVehicleTypesQueryLoading && <Spinner />}
        <HighLevelSelect
          selectedValue={vehicleTypeId === undefined ? "" : vehicleTypeId}
          onValueChange={setVehicleTypeId}
        >
          <SelectItem label="All vehicle types" value="" />
          {vehicleTypes.map(({ id, name }) => (
            <SelectItem key={id} label={name} value={id} />
          ))}
        </HighLevelSelect>
      </HStack>

      <HStack>
        {getMakesQueryLoading && <Spinner />}
        <HighLevelSelect
          selectedValue={makeId === undefined ? "" : makeId}
          onValueChange={setMakeId}
          isDisabled={makes.length == 0}
        >
          <SelectItem label="All makes" value="" />
          {makes.map(({ id, name }) => (
            <SelectItem key={id} label={name} value={id} />
          ))}
        </HighLevelSelect>
      </HStack>

      <HStack>
        {getModelsQueryDataLoading && <Spinner />}
        <HighLevelSelect
          selectedValue={modelId === undefined ? "" : modelId}
          onValueChange={setModelId}
          isDisabled={models.length == 0}
        >
          <SelectItem label="All models" value="" />
          {models.map(({ id, name }) => (
            <SelectItem key={id} label={name} value={id} />
          ))}
        </HighLevelSelect>
      </HStack>
    </HStack>
  );
};
