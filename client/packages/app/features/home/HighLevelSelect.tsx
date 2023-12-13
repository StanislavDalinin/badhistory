import {
  ChevronDownIcon,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@gluestack-ui/themed";
import { ISelectProps } from "@gluestack-ui/select/src/types";
import { FC, ReactNode } from "react";

export const HighLevelSelect: FC<
  Pick<ISelectProps, "selectedValue" | "onValueChange" | "isDisabled"> & {
    children: ReactNode[];
  }
> = ({ selectedValue, onValueChange, isDisabled, children }) => {
  return (
    <Select
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      isDisabled={isDisabled}
    >
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Select option" />
        {/* @ts-ignore */}
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {children}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};
