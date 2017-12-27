import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

Avatar.propTypes = {
  _id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  isCheckedin: PropTypes.bool.isRequired
};

function Avatar(props) {
  const {
    _id,
    name,
    surname,
    avatar,
    isCheckedin
  } = props;

  let borderColour = isCheckedin ? 'LimeGreen' : 'grey';
  return (
    <div className="avcontainer raised item" key={_id} >
      <img
          className={'ui avatar image small'}         
          src={"/images/avatars/" + avatar}
          style={{border: '5px solid ' + borderColour }} 
          >
      </img>
      <div className={'middle aligned content'}>
        <b className={'header'}>{name} {surname}</b>
      </div>
      <br/>   
    </div>
  );
}

export default Avatar