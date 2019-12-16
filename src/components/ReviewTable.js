import React from 'react';

const ReviewTable = (props) => {
  const options = props.finalData.map((finalData, index) => {
    return <option value={index}
    key={index}>{finalData.name}</option>
  })

  return(
    <h3>Table to be inserted here</h3>
  )
}

export default ReviewTable;
