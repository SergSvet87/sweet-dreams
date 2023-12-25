/* eslint-disable prettier/prettier */

export const controlStyles = (defaultStyles) => ({
  ...defaultStyles,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  maxWidth: '197px',
  height: '40px',
  padding: '4px 12px',
  fontSize: '20px',
  fontWeight: '500',
  boxShadow: 'none',
  borderRadius: '25px',
  '&:hover': {
    borderColor: '#9E9E9E',
  },
});

export const menuStyles = (defaultStyles) => ({
  ...defaultStyles,
  boxShadow: '0 4px 20px rgb(0 0 0 / 7%)',
  borderRadius: '25px',
  fontSize: '24px',
  height: 'auto',
  overflow: 'hidden',
  backgroundColor: '#fff',
});

export const selectStyles = {
  indicatorSeparator: () => ({
    border: 'none',
    background: 'url("/images/shop/arrow-right.png") center / contain no-repeat',
  }),
  dropdownIndicator: (defaultStyles, state) => ({
    ...defaultStyles,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
    color: '#131313',
  }),
  menuList: (defaultStyles) => ({
    ...defaultStyles,
    paddingTop: '5px',
    paddingBottom: 0,
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: '#b9babb',
  }),
};

export const optionStyles = (defaultStyles, state) => {
  const backgroundHoverForLightMode = state.isSelected
    ? state.isSelected
      ? '#fca'
      : '#fff'
    : state.isSelected
    ? '#fca7b5'
    : '#f2f2f2';

  const backgroundHoverForDarkMode = state.isSelected
    ? state.isSelected
      ? '#f2f2f2'
      : '#9e9e9e'
    : state.isSelected
    ? '#9e9e9e'
    : '#f2f2f2';

  const colorHoverForLightMode = state.isSelected
    ? state.isSelected
      ? '#f2f2f2'
      : '#9e9e9e'
    : state.isSelected
    ? '#9e9e9e'
    : '#f2f2f2';

  const colorHoverForDarkMode = state.isSelected
    ? state.isSelected
      ? '#9e9e9e'
      : '#f2f2f2'
    : state.isSelected
    ? '#f2f2f2'
    : '#9e9e9e';

  return {
    ...defaultStyles,
    cursor: 'pointer',
    padding: '6px 12px',
    margin: 0,
    '&:hover': {
      backgroundColor: backgroundHoverForLightMode,
    },
    backgroundColor: state.isSelected ? '#fca7b5' : '#fff',
    color: state.isSelected ? '#fff' : '#fca7b5',
  };
};
