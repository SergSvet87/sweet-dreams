/* eslint-disable prettier/prettier */

export const controlStyles = (defaultStyles) => ({
  ...defaultStyles,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: '1px solid #131313',
  maxWidth: '245px',
  height: '40px',
  padding: '2px 12px',
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
  marginTop: '8px',
  padding: '12px 4px',
  overflow: 'hidden',
  backgroundColor: '#fff',
});

export const selectStyles = {
  indicatorSeparator: () => ({
    width: '0px',
    height: '0px',
    border: 'none',
  }),
  dropdownIndicator: (defaultStyles, state) => ({
    ...defaultStyles,
    // width: '24px',
    // height: '24px',
    // border: 'none',
    // background: 'url("/images/shop/arrow-right.png") center / contain no-repeat',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
    color: '#131313',
  }),
  menuList: (defaultStyles) => ({
    ...defaultStyles,
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
      ? '#FCA'
      : '#fff'
    : state.isSelected
    ? '#FCA'
    : '#f2f2f2';

  return {
    ...defaultStyles,
    cursor: 'pointer',
    padding: '6px 12px',
    margin: 0,
    '&:hover': {
      backgroundColor: backgroundHoverForLightMode,
    },
    backgroundColor: state.isSelected ? '#fff' : '#fff',
    color: state.isSelected ? '#000' : '#b9babb',
  };
};
