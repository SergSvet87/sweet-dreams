import { IOptions } from '@/types/interfaces/profile';
import React, { CSSProperties } from 'react';
import ReactSelect, { SingleValue } from 'react-select';

interface ISelect {
  options: IOptions[];
  onChange: (newValue: SingleValue<IOptions>) => void;
  defaultOption?: IOptions;
  placeholder?: string;
  indicatorSeparatorStyle?: CSSProperties;
  controlStyle?: CSSProperties;
  containerStyle?: CSSProperties;
  indicatorContainerStyle?: CSSProperties;
  dropdownIndicatorStyle?: CSSProperties;
  menuStyle?: CSSProperties;
  optionStyle?: CSSProperties;
  selectedColor?: string;
  hideSelectedOptions?: boolean;
  isSearchable?: boolean;
}

const Select: React.FC<ISelect> = ({
  options,
  onChange,
  defaultOption,
  placeholder,
  indicatorSeparatorStyle,
  controlStyle,
  indicatorContainerStyle,
  containerStyle,
  dropdownIndicatorStyle,
  menuStyle,
  optionStyle,
  hideSelectedOptions = true,
  isSearchable = false,
}) => {
  return (
    <ReactSelect
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultOption}
      hideSelectedOptions={hideSelectedOptions}
      styles={{
        container: def => ({ ...def, ...containerStyle }),
        indicatorSeparator: defaultStyles => ({ ...defaultStyles, ...indicatorSeparatorStyle }),
        control: defaultStyles => ({ ...defaultStyles, ...controlStyle }),
        indicatorsContainer: defaultStyles => ({ ...defaultStyles, ...indicatorContainerStyle }),
        dropdownIndicator: (defaultStyles, state) => ({
          ...defaultStyles,
          ...dropdownIndicatorStyle,
          transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
        }),
        menu: defaultStyles => ({ ...defaultStyles, ...menuStyle }),
        option: defaultStyles => ({
          ...defaultStyles,
          ...optionStyle,
        }),
      }}
      isSearchable={isSearchable}
    />
  );
};

export default Select;
