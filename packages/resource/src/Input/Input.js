import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

function InputStyle(props) {
  console.log(props, 'input');
  const {
    editAble = false, text, bgColor, onContentChange, ...others
  } = props;
  const inputProps = {};
  if (editAble) {
    inputProps.value = text;
  } else {
    inputProps.defaultValue = text;
  }
  return (
    <Input
      style={{
        width: '100%',
        minHeight: '40px',
        padding: 10,
        background: bgColor,
        ...others,
      }}
      {...inputProps}
      onChange={e => onContentChange && onContentChange(e.target.value)}
    />
  );
}

InputStyle.prototype.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  editAble: PropTypes.bool,
};

InputStyle.prototype.defaultProps = {
  text: '',
  bgColor: '',
  editAble: false,
};

export default InputStyle;
