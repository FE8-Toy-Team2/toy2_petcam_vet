import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = dateTime.toLocaleString();

  return (
    <div>
      <ClockDisplay>{formattedDateTime}</ClockDisplay>
    </div>
  );
};

export default Clock;


const ClockDisplay = styled.p`
	color: var(--lightgray);
	font-size: 13px;
	margin-top: 3px;
	padding-right: 30px;
	
`
